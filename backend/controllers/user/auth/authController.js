import { isValidNumber, isValidEmail } from '../../../utils/validationHelper.js';
import asyncHandler from '../../../middleware/asyncHandler.js';
import User from '../../../models/userModel.js';
import { Permission, Role } from '../../../models/permissionAndRoleModel.js';
import filehandler from '../../../utils/filehandler.js';
import generateToken from '../../../utils/generateToken.js';
import permissionSlugs from '../../../constants/permissionSlugs.js';
import { sentenceCase } from 'change-case';
import UserLinks from '../../../models/userLinksModel.js';

// @desc Post authorize expenses
// @route POST api/user/auth/login
// @acess Privet
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ $or: [{ email: email }, { userName: email }] })
    .populate({ path: 'roles', model: Role })
    .populate({ path: 'permissions', model: Permission })
    .populate({
      path: 'roles',
      model: Role,
      populate: { path: 'permissions', model: Permission },
    });

  if (user && (await user.matchPassword(password))) {
    // Combine all permissions (direct + from roles)
    let allPermissions = [...user.permissions];
    user.roles.forEach((role) => {
      allPermissions = allPermissions.concat(role.permissions);
    });
    // Return unique permissions
    const uniquePermissions = Array.from(
      new Set(allPermissions.map((p) => p.slug)),
    );
    const mappedRoles = user.roles.map(e => {
      const filtered = {
        _id: e._id,
        slug: e.slug,
        name: e.name,
        description: e.description,
      }
      return filtered
    })
    res.json({
      _id: user._id,
      email: user.email,
      userName: user.userName,
      firstName: user?.firstName,
      lastName: user?.lastName,
      token: await generateToken(res, user._id),
      permissions: uniquePermissions,
      roles: mappedRoles
    });
  } else {
    // res.set('Access-Control-Allow-Origin', 'http://localhost:9000');
    res.status(401);
    // res.json({message:"error"})
    throw new Error('Invalid email or password');
  }
});
// @desc Post user
// @route POST api/user/auth/register
// @acess Public
const registerUser = asyncHandler(async (req, res) => {
  let user = await User.findOne({ $or: [{ email: req.body.email }, { userName: req.body.userName }] });
  if (!user) {
    const publicRole = await Role.findOne({ slug: 'public' });
    const createduser = await User.create({
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      permissions: [],
      roles: publicRole ? publicRole._id : [],
    });
    await UserLinks.create({
      user: createduser._id,
      links: []
    })
    res.json({
      _id: createduser._id,
      email: createduser.email,
      userName: createduser.userName,
      firstName: createduser?.firstName,
      lastName: createduser?.lastName,
      token: await generateToken(res, createduser._id),
      permissions: [],
      roles: []
    });
  } else {
    // res.set('Access-Control-Allow-Origin', 'http://localhost:9000');
    res.status(403);
    throw new Error('User already exist');
  }
});
// @desc    Generate role and permission
// @route   GET /api/user/auth/create-super-user
// @access  Public
const createSuperAndRolesUserIfNotExist = asyncHandler(async (req, res) => {
  console.log('generating permission rule');
  const existUser = await User.findOne({ email: 'minhaj@gmail.com' })

  const permissionSlugKeys = Object.keys(permissionSlugs);
  // await Permission.deleteMany();
  // await Role.deleteMany();
  const existingPermission = await Permission.find({});
  const existingPermissionSlugs = existingPermission.map((e) => e?.slug);
  const permissionsData = [];
  for (let i = 0; i < permissionSlugKeys.length; i++) {
    if (!existingPermissionSlugs.includes(`${permissionSlugKeys[i]}`)) {
      console.log(`${permissionSlugKeys[i]}`);
      console.log(existingPermissionSlugs.includes(`${permissionSlugKeys[i]}`));
      permissionsData.push({
        slug: permissionSlugKeys[i],
        name: sentenceCase(permissionSlugKeys[i]),
        description: 'Can ' + sentenceCase(permissionSlugKeys[i]),
      });
    }
  }
  const permissions =
    permissionsData.length !== 0
      ? await Permission.insertMany(permissionsData)
      : [];
  const userDetails = { email: 'minhaj@gmail.com', userName: "minhaj", password: 1234 }
  const user = {}
  const existingSuperAdminRole = await Role.findOne({ slug: 'superAdmin' });
  const allPermissions = await Permission.find({});
  if (existingSuperAdminRole) {
    existingSuperAdminRole.permissions = allPermissions.map((e) => e._id);
    user.roles = [existingSuperAdminRole._id];
  } else {
    const roles = await Role.create({
      slug: 'superAdmin',
      name: 'Surper Admin',
      description: 'Surper Admin Permission',
      permissions: allPermissions.map((e) => e._id),
    });
    user.roles = [roles._id];
  }
  const existingPublicRole = await Role.findOne({ slug: 'public' });
  if (!existingPublicRole) {
    const publicRole = await Role.create({
      slug: 'public',
      name: 'Public',
      description:
        'Public Access Permission, No need role or direct permission',
      permissions: [],
    });
  }
  user.permissions = [];
  if (existUser) {
    const existLink = await UserLinks.findOne({
      user: existUser._id,
    })
    if (!existLink) {
      await UserLinks.create({
        user: existUser._id,
        links: []
      })
    }
    existUser.roles = user.roles
    existUser.permissions = user.permissions
    await existUser.save()
  } else {
    const usernew = await User.create({ ...userDetails, ...user });
    await UserLinks.create({
      user: usernew._id,
      links: []
    })
  }

  res.json({
    userDetails,
    existingPublicRole,
    existingSuperAdminRole,
    existingPermissionSlugs,
    permissions
  });
});
export { authUser, registerUser, createSuperAndRolesUserIfNotExist };
