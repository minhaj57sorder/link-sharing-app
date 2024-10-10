import asyncHandler from '../middleware/asyncHandler.js';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { Permission, Role } from '../models/permissionAndRoleModel.js';
const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
      } else {
        console.error(error);
        res.status(401);
        throw new Error('Not authorized, token failed');
      }
    } catch (error) {
      // console.log(req.user)
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});
const protectUser = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies?.jwt;
  console.log('token', token);
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId =
        decoded?.userId || decoded?.id || req?.user?._id || req?.user?.id; // Assume user is authenticated and user ID is available
      const user = await User.findById(userId)
        .select('-password');
      if (user) {
        req.user = user
        next();
      } else {
        console.error(error);
        res.status(401);
        throw new Error('User not found.');
      }
    } catch (error) {
      // console.log(req.user)
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
  else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});
const admin = (req, res, next) => {
  if (req.user && req.user.permission === 'admin') {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};
const checkPermission = (permissionSlug) => {
  return async (req, res, next) => {
    let token;
    // Read JWT from the 'jwt' cookie
    const publicRole = await Role.findOne({ slug: 'public' }).populate({
      path: 'permissions',
      model: Permission,
    });
    token = req.cookies?.jwt;
    // console.log('token', token);
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId =
          decoded?.userId || decoded?.id || req?.user?._id || req?.user?.id; // Assume user is authenticated and user ID is available
        const user = await User.findById(userId)
          .populate({ path: 'roles', model: Role })
          .populate({ path: 'permissions', model: Permission })
          .populate({
            path: 'roles',
            model: Role,
            populate: { path: 'permissions', model: Permission },
          })
          .select('-password');
        // console.log('user ', decoded, user, userId);
        let hasPermission = user.permissions.some(
          (p) => p.slug === permissionSlug,
        );
        user.roles.forEach((role) => {
          // if (role.slug.some(p => p.slug === permissionSlug)) {
          //   hasPermission = true;
          // }
          if (role.permissions.some((p) => p.slug === permissionSlug)) {
            hasPermission = true;
          }
        });
        if (hasPermission) {
          // Combine all permissions (direct + from roles)
          let allPermissions = [...user.permissions];
          user.roles.forEach((role) => {
            allPermissions = allPermissions.concat(role.permissions);
          });
          // Return unique permissions
          const uniquePermissions = Array.from(
            new Set(allPermissions.map((p) => p.slug)),
          );
          req.user = user;
          req.user.uniquePermissions = uniquePermissions;
          return next();
        } else {

          if (publicRole && publicRole?.slug) {
            let hasPermission = publicRole.permissions.some(
              (p) => p.slug === permissionSlug,
            );
            if (hasPermission) {
              return next();
            }
          } else {
            return res.status(403).json({ error: 'Access denied' });
          }
        }
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    } else {

      if (publicRole && publicRole?.slug) {
        let hasPermission = publicRole.permissions.some(
          (p) => p.slug === permissionSlug,
        );
        if (hasPermission) {
          return next();
        }
      } else {
        return res.status(401).json({ error: 'Not authorized, no token' });
      }
    }
  };
};
export { protect,protectUser, admin, checkPermission };
