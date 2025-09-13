// controllers/admin/vendors.controller.js
import User from "../../models/user.model.js";

/**
 * GET /admin/vendors
 * returns all users with role 'vendor'
 */
export const getVendors = async (req, res) => {
  try {
    const vendors = await User.find({ role: "vendor" }).select("-password");
    return res.json(vendors);
  } catch (error) {
    console.error("getVendors error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * POST /admin/vendors
 * create a new vendor (admin only)
 * expected body: { shopName, ownerName, name, email, password, approved }
 */
export const createVendor = async (req, res) => {
  try {
    const { shopName, ownerName, name, email, password, approved = false } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "Email already in use" });

    // Set name fallback: prefer ownerName or name or shopName
    const finalName = ownerName || name || shopName || email.split("@")[0];

    const vendor = new User({
      name: finalName,
      email,
      password,
      role: "vendor",
      shopName,
      ownerName,
      approved,
    });

    await vendor.save();
    const vendorSafe = vendor.toObject();
    delete vendorSafe.password;

    return res.status(201).json(vendorSafe);
  } catch (error) {
    console.error("createVendor error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * PUT /admin/vendors/:id
 * update vendor fields (admin only)
 */
export const updateVendor = async (req, res) => {
  try {
    const id = req.params.id;
    const { shopName, ownerName, name, email, password, approved } = req.body;

    const vendor = await User.findById(id);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });
    if (vendor.role !== "vendor") return res.status(400).json({ message: "User is not a vendor" });

    if (shopName !== undefined) vendor.shopName = shopName;
    if (ownerName !== undefined) vendor.ownerName = ownerName;
    if (name !== undefined) vendor.name = name;
    if (email !== undefined) vendor.email = email;
    if (approved !== undefined) vendor.approved = approved;
    if (password) vendor.password = password; // will get hashed by pre('save')

    await vendor.save();
    const vendorSafe = vendor.toObject();
    delete vendorSafe.password;

    return res.json(vendorSafe);
  } catch (error) {
    console.error("updateVendor error:", error);
    if (error.code === 11000) return res.status(409).json({ message: "Email already in use" });
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * DELETE /admin/vendors/:id
 */
export const deleteVendor = async (req, res) => {
  try {
    const id = req.params.id;
    const vendor = await User.findById(id);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });
    if (vendor.role !== "vendor") return res.status(400).json({ message: "User is not a vendor" });

    await User.findByIdAndDelete(id);
    return res.json({ message: "Vendor removed" });
  } catch (error) {
    console.error("deleteVendor error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
