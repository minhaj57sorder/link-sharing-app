import { isValidObjectId } from 'mongoose';
import asyncHandler from '../middleware/asyncHandler.js';
import { Role, Permission } from '../models/permissionAndRoleModel.js';

// @desc    Fetch all role
// @route   GET /api/role
// @access  Public
const getRoles = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 10;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = {};
  const count = await Role.countDocuments({});
  const rolesFromDb = await Role.find({}).populate({
    path: 'permissions',
    model: Permission,
  });
  let roles = rolesFromDb
    .map((e) => {
      console.log(e.permissions);
      if (
        e.permissions.every((f) => {
          console.log(f.slug, f);
          return req?.user?.uniquePermissions.includes(f.slug);
        })
      ) {
        return e;
      } else {
        return false;
      }
    })
    .filter((e) => e);
  res.json({ roles: roles, page, pages: Math.ceil(count / pageSize) });
});
// @desc    Fetch single data
// @route   GET /api/role/:id
// @access  Public
const getRoleById = asyncHandler(async (req, res) => {
  // NOTE: checking for valid ObjectId to prevent CastError moved to separate
  // middleware. See README for more info.
  const data = await Role.findById(req.params.id);
  if (data) {
    return res.json(data);
  } else {
    // NOTE: this will run if a valid ObjectId but no data was found
    // i.e. data may be null
    res.status(404);
    throw new Error('Role not found');
  }
});
// @desc    Create a data
// @route   POST /api/role
// @access  Private/Admin
const createRole = asyncHandler(async (req, res) => {
  const { name, permissions, slug, description } = req.body;
  const permissionsList =
    typeof permissions === 'string'
      ? JSON.parse(permissions)
      : [...permissions];
  // console.log("permissions: ", permissionsList)
  // check valid permission ids
  const invalidIds = permissionsList.filter((e) => !isValidObjectId(e));
  const validIds = permissionsList.filter((e) => isValidObjectId(e));
  if (invalidIds.length > 0) {
    return res
      .status(404)
      .json({ message: 'Some Permission id invalid', invalidIds });
  }
  const permissionFromDb = await Permission.find({
    _id: { $in: validIds },
  }).sort('name');
  if (!permissionFromDb) {
    return res.status(404).json({ message: 'Permissions not found' });
  }
  const data = new Role({
    name: name,
    slug: slug,
    description,
    permissions: permissionFromDb.map((e) => e._id),
  });
  const createdRole = await data.save();
  return res.status(201).json(createdRole);
});
// @desc    Update a data
// @route   PUT /api/role/:id
// @access  Private/Admin
const updateRole = asyncHandler(async (req, res) => {
  const { name, permissions, slug, description } = req.body;
  const permissionsList =
    typeof permissions === 'string'
      ? JSON.parse(permissions)
      : [...permissions];
  console.log(
    'permissions: ',
    permissions,
    'permissionList: ',
    permissionsList,
  );
  // check valid permission ids
  const invalidIds = permissionsList.filter((e) => !isValidObjectId(e));
  const validIds = permissionsList.filter((e) => isValidObjectId(e));
  if (invalidIds.length > 0) {
    return res
      .status(404)
      .json({ message: 'Some Permission id invalid', invalidIds });
  }
  const permissionFromDb = await Permission.find({ _id: { $in: validIds } });
  if (!permissionFromDb) {
    return res.status(404).json({ message: 'Permissions not found' });
  }
  const data = await Role.findById(req.params.id);
  console.log('Role ', data);
  if (data) {
    data.name = name || data.name;
    data.slug = slug || data.slug;
    data.description = description || data.description;
    data.permissions = permissionFromDb.map((e) => e._id) || [];
    const updatedRole = await data.save();
    res.json(updatedRole);
  } else {
    res.status(404);
    throw new Error('Role not found');
  }
});
// @desc    Delete a data
// @route   DELETE /api/role/:id
// @access  Private/Admin
const deleteRole = asyncHandler(async (req, res) => {
  const data = await Role.findById(req.params.id);
  if (data) {
    await Role.deleteOne({ _id: data._id });
    res.json({ message: 'Role removed' });
  } else {
    res.status(404);
    throw new Error('Role not found');
  }
});
export {
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
