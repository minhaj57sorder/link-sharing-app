import express from 'express';
import {
  getuserLinks,
  getUserLinksByUserName,
  getUserLinksById,
  createUserLinks,
  updateUserLinks,
  deleteUserLinks,
} from '../../../controllers/user_links/user_link_list/userLinksController.js';
import { upload } from '../../../utils/fileUploader.js';
import { protectUser, checkPermission } from '../../../middleware/authMiddleware.js';
import permissionSlugs from '../../../constants/permissionSlugs.js';
const router = express.Router();
router
  .route('/')
  .get(checkPermission(permissionSlugs.viewUserLinks), getuserLinks)
  .post(
    checkPermission(permissionSlugs.createUserLinks),
    upload.fields([]),
    createUserLinks,
  );
router
  .route('/userlinks/:userName')
  .get(getUserLinksByUserName)
router
  .route('/:id')
  .get(checkPermission(permissionSlugs.viewUserLinks), getUserLinksById)
  .put(
    checkPermission(permissionSlugs.editUserLinks),
    upload.fields([]),
    updateUserLinks,
  )
  .post(
    protectUser,
    upload.fields([]),
    updateUserLinks)
  .delete(checkPermission(permissionSlugs.deleteUserLinks), deleteUserLinks);
export default router;
