import User from "../models/User.js";

// @desc    Get admin profile
// @route   GET /admin/profile/:id
export const getAdminProfile = async (req, res) => {
  try {
    const admin = await User.findById(req.user.id).select("-password");
    if (!admin || admin.role !== "admin") {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Update admin profile
// @route   PUT /admin/profile/:id
export const updateAdminProfile = async (req, res) => {
  try {
    const { name, email, bio } = req.body;
    const updates = { name, email, bio };

    if (req.file && req.file.path) {
      updates.img = req.file.path; // Cloudinary image URL
    }

    const updatedAdmin = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true }
    ).select("-password");

    res.status(200).json(updatedAdmin);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update profile", error: error.message });
  }
};
