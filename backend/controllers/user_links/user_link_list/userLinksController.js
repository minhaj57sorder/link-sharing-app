import { isValidNumber } from '../../../utils/validationHelper.js';
import { isValidObjectId } from 'mongoose';
import asyncHandler from '../../../middleware/asyncHandler.js';
import UserLinks from '../../../models/userLinksModel.js';
import filehandler from '../../../utils/filehandler.js';
import User from '../../../models/userModel.js';
// @desc Get all userLinks
// @route GET api/user_links/user_link_lists
// @acess Privet
const getuserLinks = asyncHandler(async (req, res) => {
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
  const count = await UserLinks.countDocuments({ ...keywords });
  const apiFunction = UserLinks.find({ ...keywords })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ [sortBy]: descending ? -1 : 1 });
  if (req.query.hasOwnProperty('select')) {
    apiFunction.select(req.query.select);
  }
  const userLinks = await apiFunction.exec();
  res.json({ userLinks, page, pages: Math.ceil(count / pageSize) });
});
// @desc Get userLinks by id
// @route GET api/user_links/user_link_lists/:id
// @acess Privet
const getUserLinksById = asyncHandler(async (req, res) => {
  const apiFunction = UserLinks.findById(req.params.id);
  if (req.query.hasOwnProperty('select')) {
    apiFunction.select(req.query.select);
  }
  const userLinks = await apiFunction.exec();
  res.json(userLinks);
});
// @desc Get userLinks by id
// @route GET api/user_links/user_link_lists/:id
// @acess Privet
const getUserLinksByUserName = asyncHandler(async (req, res) => {
  const user = await User.findOne({ userName: req.params.userName })
  if (user) {
    const apiFunction = await UserLinks.findOne({ user: user._id });

    res.json(apiFunction);
  } else {
    res.status(404).json({ msg: "user not exist" })
  }
});
// @desc POST userLinks
// @route POST api/user_links/user_link_lists/:id
// @acess Privet
const createUserLinks = asyncHandler(async (req, res) => {
  const userLinks = {};
  const errors = {};
  // convert to js object
  // in case if the body and files data is not in js object
  req.body = JSON.parse(JSON.stringify(req.body));

  if (req.body.hasOwnProperty('links')) {
    userLinks.links = JSON.parse(req.body.links);
  } else {
    errors.links = "Links Required"
  }
  if (req.body.hasOwnProperty('user')) {
    userLinks.user = req.body.user;
  } else {
    errors.user = "User objectId Required"
  }
  if (Object.keys(errors).length !== 0) {
    return res.status(400).json({ errors });
  }
  const createdUserLinks = await UserLinks.create({
    ...userLinks,
  });
  if (createdUserLinks) {
    res.json(createdUserLinks);
    // end if
  } else {
    res.status(404);
    throw new Error('UserLinks not found');
  }
});
// @desc Put userLinks
// @route PUT api/user_links/user_link_lists/:id
// @acess Privet
const updateUserLinks = asyncHandler(async (req, res) => {
  const userLinks = await UserLinks.findById(req.params.id);
  // start if
  if (userLinks) {
    // convert to js object
    // in case if the body and files data is not in js object
    req.body = JSON.parse(JSON.stringify(req.body));
    if (req.body.hasOwnProperty('links')) {
      userLinks.links = JSON.parse(req.body.links);
    }
    if (req.body.hasOwnProperty('user')) {
      userLinks.user = req.body.user;
    }
    const updatedUserLinks = await userLinks.save();
    res.json(updatedUserLinks);
    // end if
  } else {
    res.status(404);
    throw new Error('UserLinks not found');
  }
});
// @desc Delete userLinks by id
// @route DELETE api/user_links/user_link_lists/:id
// @acess Privet
const deleteUserLinks = asyncHandler(async (req, res) => {
  const userLinks = await UserLinks.findById(req.params.id);
  if (userLinks) {
    await userLinks.deleteOne();
    res.json({ message: 'UserLinks removed' });
  } else {
    res.status(404);
    throw new Error('UserLinks not found');
  }
});
export {
  getuserLinks,
  getUserLinksByUserName,
  getUserLinksById,
  createUserLinks,
  updateUserLinks,
  deleteUserLinks,
};
