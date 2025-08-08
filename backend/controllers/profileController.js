import User from "../models/User.js";

// @desc    Get admin profile
// @route   GET /admin/profile/:id
export const getAdminProfile = async (req, res) => {
  try {
    const admin = await User.findById(req.user.id).select("-password");
    if (!admin || (admin.role !== "admin" && admin.role !== "superadmin")) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Update admin profile
// @route   PUT /admin/profile/:id
// export const updateAdminProfile = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       designation,
//       qualification,
//       experience,
//       whatsapp,
//       country,
//     } = req.body;
//     const updates = {
//       name,
//       email,
//       designation,
//       qualification,
//       experience,
//       country,
//       whatsapp,
//     };

//     if (req.file && req.file.path) {
//       updates.img = req.file.path; // Cloudinary image URL
//     }

//     const updatedAdmin = await User.findByIdAndUpdate(
//       req.user.id,
//       { $set: updates },
//       { new: true }
//     ).select("-password");

//     res.status(200).json(updatedAdmin);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to update profile", error: error.message });
//   }
// };

export const updateAdminProfile = async (req, res) => {
  try {
    const allowedFields = [
      "name",
      "email",
      "designation",
      "qualification",
      "experience",
      "whatsapp",
      "country",
    ];

    // Get current user first
    const currentAdmin = await User.findById(req.user.id).select("-password");

    if (!currentAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Start with existing data
    const updates = { ...currentAdmin._doc };

    // Overwrite only the fields sent in req.body
    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined && req.body[field] !== "") {
        updates[field] = req.body[field];
      }
    });

    // If image is uploaded, add it
    if (req.file && req.file.path) {
      updates.img = req.file.path;
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
