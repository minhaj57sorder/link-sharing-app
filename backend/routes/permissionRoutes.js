import express from 'express';
const router = express.Router();
import {
  createPermission,
  deletePermission,
  getPermissionById,
  getPermissions,
  updatePermission,
} from '../controllers/permissionController.js';
import { upload } from '../utils/fileUploader.js';
import { checkPermission } from '../middleware/authMiddleware.js';
import permissionSlugs from '../constants/permissionSlugs.js';
router
  .route('/')
  .get(checkPermission(permissionSlugs.viewPermission), getPermissions)
  .post(
    checkPermission(permissionSlugs.createPermission),
    upload.fields([]),
    createPermission,
  );
router
  .route('/:id')
  .get(checkPermission(permissionSlugs.viewPermission), getPermissionById)
  .put(
    checkPermission(permissionSlugs.editPermission),
    upload.fields([]),
    updatePermission,
  )
  .delete(checkPermission(permissionSlugs.deletePermission), deletePermission);
export default router;
