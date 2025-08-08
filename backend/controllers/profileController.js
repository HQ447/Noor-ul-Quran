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

    // 1️⃣ Get current admin from DB
    const admin = await User.findById(req.user.id).select("-password");

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // 2️⃣ Update only provided fields
    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined && req.body[field] !== "") {
        admin[field] = req.body[field];
      }
    });

    // 3️⃣ If image is uploaded, update it
    if (req.file && req.file.path) {
      admin.img = req.file.path;
    }

    // 4️⃣ Save changes
    const updatedAdmin = await admin.save();

    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update profile",
      error: error.message,
    });
  }
};
