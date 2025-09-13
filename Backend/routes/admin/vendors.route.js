// routes/admin/vendors.route.js
import express from "express";
import {
  getVendors,
  createVendor,
  updateVendor,
  deleteVendor,
} from "../../controllers/admin/vendors.controller.js";
import { protectRoute, adminRoute } from "../../middleware/auth.middleware.js";

const router = express.Router();

// All routes protected and admin-only
router.get("/", protectRoute, adminRoute, getVendors);
router.post("/", protectRoute, adminRoute, createVendor);
router.put("/:id", protectRoute, adminRoute, updateVendor);
router.delete("/:id", protectRoute, adminRoute, deleteVendor);

export default router;
