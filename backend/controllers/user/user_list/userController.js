import { isValidNumber, validateUsername, convertToUsername } from '../../../utils/validationHelper.js';
import { isValidObjectId } from 'mongoose';
import asyncHandler from '../../../middleware/asyncHandler.js';
import User from '../../../models/userModel.js';
import filehandler from '../../../utils/filehandler.js';

// @desc Get all users
// @route GET api/users
// @acess Privet
const getUsers = asyncHandler(async (req, res) => {
  console.log("getting useres")
  const keywords = {};
  // in case if the query is not js object
  req.query = JSON.parse(JSON.stringify(req.query));
  // filtering
  if (req.query?.keywords) {
    if (req.query?.filterColumn) {
      if (
        isValidNumber(req.query?.keywords) ||
        isValidObjectId(req.query?.keywords)
      ) {
        keywords[req.query.filterColumn] = req.query.keywords;
      } else {
        keywords[req.query.filterColumn] = {
          $regex: req.query.keywords,
          $options: 'i',
        };
      }
    } else {
    }
  }
  if (req.query?.gt) {
    keywords.createdAt = {
      $gt: req.query?.gt,
    };
  }
  if (req.query?.lt) {
    if (!keywords?.createdAt) {
      keywords.createdAt = {
        $lt: req.query?.lt,
      };
    } else {
      keywords.createdAt['$lt'] = req.query?.lt;
    }
  }
  if (req.query?.rangeColumn) {
    if (isValidNumber(req.query?.gtValue)) {
      keywords[req.query.rangeColumn] = {
        $gt: req.query.gtValue,
      };
    }
    if (isValidNumber(req.query?.ltValue)) {
      if (keywords[req.query.rangeColumn]) {
        keywords[req.query.rangeColumn].$lt = req.query.ltValue;
      } else {
        keywords[req.query.rangeColumn] = {
          $lt: req.query.ltValue,
        };
      }
    }
  }
  const pageSize = Number(req.query.pageSize) || 30;
  const page = Number(req.query.pageNumber) || 1;
  const descending = req.query.descending || true;
  const sortBy = String(req.query.sortBy) || 'createdAt';
  const count = await User.countDocuments({ ...keywords });
  const apiFunction = User.find({ ...keywords })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ [sortBy]: descending ? -1 : 1 });
  let selectedString = '';
  if (req.query.hasOwnProperty('select')) {
    selectedString += ' ' + req.query.select;
  }
  apiFunction.select(selectedString);
  apiFunction.select('-password');
  const users = await apiFunction.exec();
  res.json({ users, page, pages: Math.ceil(count / pageSize) });
});
// @desc Get user by id
// @route GET api/users/:id
// @acess Privet
const getUserById = asyncHandler(async (req, res) => {
  const apiFunction = User.findById(req.params.id);
  let selectedString = '-password';
  if (req.query.hasOwnProperty('select')) {
    selectedString += ' ' + req.query.select;
  }
  apiFunction.select(selectedString);
  const users = await apiFunction.exec();
  res.json(users);
});
// @desc Get user by id
// @route GET api/users/userprofile
// @acess Privet
const getUserByCookie = asyncHandler(async (req, res) => {
  const apiFunction = User.findById(req.user._id);
  let selectedString = '-password';
  if (req.query.hasOwnProperty('select')) {
    selectedString += ' ' + req.query.select;
  }
  apiFunction.select(selectedString);
  const user = await apiFunction.exec();
  res.json(user);
});
// @desc Get user by username
// @route GET api/users/userprofile/username
// @acess Privet
const getUserByUserName = asyncHandler(async (req, res) => {
  const apiFunction = User.findOne({userName:req.params.userName});
  let selectedString = '-password';
  if (req.query.hasOwnProperty('select')) {
    selectedString += ' ' + req.query.select;
  }
  apiFunction.select(selectedString);
  const user = await apiFunction.exec();
  res.json(user);
});
// @desc POST user
// @route POST api/users/:id
// @acess Privet
const createUser = asyncHandler(async (req, res) => {
  const user = {};
  const errors = {};
  // convert to js object
  // in case if the body and files data is not in js object
  req.body = JSON.parse(JSON.stringify(req.body));
  req.files = JSON.parse(JSON.stringify(req.files));
  if (req.body.hasOwnProperty('firstName')) {
    user.firstName = req.body.firstName;
  }
  if (req.body.hasOwnProperty('lastName')) {
    user.lastName = req.body.lastName;
  }
  if (req.body.hasOwnProperty('userName')) {
    user.userName = req.body.userName;
    const existUserWithUserName = await User.findOne({ userName: req.body.userName })
    if (existUserWithUserName) {
      errors.userName = 'User Name Already Exist.';
    }
  }
  if (req.body.hasOwnProperty('email')) {
    user.email = req.body.email;
    const existUserWithUserName = await User.findOne({ email: req.body.email })
    if (existUserWithUserName) {
      errors.email = 'User Email Already Exist.';
    }
  } else {
    errors.email = 'Email required.';
  }
  if (req.body.hasOwnProperty('password')) {
    user.password = req.body.password;
  } else {
    errors.password = 'Password required.';
  }
  if (req.files.hasOwnProperty('profilePicture')) {
    if (
      user['profilePicture'] &&
      user['profilePicture'] !== 'uploads/placeholder-image.jpg' &&
      !user['profilePicture'].includes('placeholder-image.jpg')
    ) {
      filehandler.deleteFile(user['profilePicture']);
    }
    user.profilePicture = req.files.profilePicture[0].path;
  }
  if (req.body.hasOwnProperty('roles')) {
    user.roles = JSON.parse(req.body.roles);
  }
  if (req.body.hasOwnProperty('permissions')) {
    user.permissions = JSON.parse(req.body.permissions);
  }
  if (Object.keys(errors).length !== 0) {
    return res.status(400).json({ errors });
  }
  const createdUser = await User.create({
    ...user,
  });
  if (createdUser) {
    res.json({ ...createdUser._doc, password: null });
    // end if
  }
});
// @desc Put user
// @route PUT api/users/:id
// @acess Privet
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  const errors = {};
  // start if
  if (user) {
    // convert to js object
    // in case if the body and files data is not in js object
    req.body = JSON.parse(JSON.stringify(req.body));
    req.files = JSON.parse(JSON.stringify(req.files));
    // if (req.body.hasOwnProperty('userName') && user.userName !== req.body.userName) {
    //   user.userName = req.body.userName;
    //   const existUserWithUserName = await User.findOne({ userName: req.body.userName })
    //   if (existUserWithUserName) {
    //     errors.userName = 'User Name Already Exist.';
    //   }
    //   if(!validateUsername(req.body.userName)){
    //     errors.userName = 'Username Not Valid. Your username should be like this ' + convertToUsername(req.body.userName);
    //   }
    // }
    if (req.body.hasOwnProperty('firstName')) {
      user.firstName = req.body.firstName;
    }
    if (req.body.hasOwnProperty('lastName')) {
      user.lastName = req.body.lastName;
    }
    if (req.body.hasOwnProperty('email') && user.email !== req.body.email) {
      user.email = req.body.email;
      const existUserWithUserEmail = await User.findOne({ email: req.body.email })
      if (existUserWithUserEmail) {
        errors.userName = 'User Email Already Exist.';
      }
    }
    if (req.body.hasOwnProperty('password')) {
      user.password = req.body.password;
    }
    if (req.files.hasOwnProperty('profilePicture')) {
      if (
        user['profilePicture'] &&
        user['profilePicture'] !== 'uploads/placeholder-image.jpg' &&
        !user['profilePicture'].includes('placeholder-image.jpg')
      ) {
        filehandler.deleteFile(user['profilePicture']);
      }
      user.profilePicture = req.files.profilePicture[0].path;
    }
    if (req.body.hasOwnProperty('roles')) {
      user.roles = JSON.parse(req.body.roles);
    }
    if (req.body.hasOwnProperty('permissions')) {
      user.permissions = JSON.parse(req.body.permissions);
    }

    if (Object.keys(errors).length !== 0) {
      return res.status(400).json({ errors });
    }
    const updatedUser = await user.save();
    res.json({ ...updatedUser._doc, password: null });
    // end if
  }
});
// @desc Delete user by id
// @route DELETE api/users/:id
// @acess Privet
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    if (
      user['profilePicture'] &&
      user['profilePicture'] !== 'uploads/placeholder-image.jpg' &&
      !user['profilePicture'].includes('placeholder-image.jpg')
    ) {
      filehandler.deleteFile(user['profilePicture']);
    }
    await user.deleteOne();
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
export { getUsers,getUserByCookie,getUserByUserName, getUserById, createUser, updateUser, deleteUser };
