import asyncHandler from '../middleware/asyncHandler.js';
import { Role, Permission } from '../models/permissionAndRoleModel.js';
// @desc    Fetch all permission
// @route   GET /api/permission
// @access  Protected
const getPermissions = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 10;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = {
    slug: { $in: req?.user?.uniquePermissions || [] },
  };
  const count = await Permission.countDocuments({ ...keyword });
  const permissions = await Permission.find({ ...keyword });
  // .limit(pageSize)
  // .skip(pageSize * (page - 1));
  res.json({ permissions, page, pages: Math.ceil(count / pageSize) });
});
// @desc    Fetch single data
// @route   GET /api/permission/:id
// @access  Protected
const getPermissionById = asyncHandler(async (req, res) => {
  // NOTE: checking for valid ObjectId to prevent CastError moved to separate
  // middleware. See README for more info.
  const data = await Permission.findById(req.params.id);
  if (data) {
    return res.json(data);
  } else {
    // NOTE: this will run if a valid ObjectId but no data was found
    // i.e. data may be null
    res.status(404);
    throw new Error('Permission not found');
  }
});
// @desc    Create a data
// @route   POST /api/permission
// @access  Private/Admin
const createPermission = asyncHandler(async (req, res) => {
  const { name, slug, description } = req.body;
  const data = new Permission({
    name: name,
    slug: slug,
    description,
  });
  const createdPermission = await data.save();
  res.status(201).json(createdPermission);
});
// @desc    Update a data
// @route   PUT /api/permission/:id
// @access  Private/Admin
const updatePermission = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;
  const data = await Permission.findById(req.params.id);
  if (data) {
    data.name = name;
    data.price = price;
    data.description = description;
    data.image = image;
    data.brand = brand;
    data.category = category;
    data.countInStock = countInStock;
    const updatedPermission = await data.save();
    res.json(updatedPermission);
  } else {
    res.status(404);
    throw new Error('Permission not found');
  }
});
// @desc    Delete a data
// @route   DELETE /api/permission/:id
// @access  Private/Admin
const deletePermission = asyncHandler(async (req, res) => {
  const data = await Permission.findById(req.params.id);
  if (data) {
    await Permission.deleteOne({ _id: data._id });
    res.json({ message: 'Permission removed' });
  } else {
    res.status(404);
    throw new Error('Permission not found');
  }
});
export {
  getPermissions,
  getPermissionById,
  createPermission,
  updatePermission,
  deletePermission,
};
