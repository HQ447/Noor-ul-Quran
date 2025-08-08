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
    // 1️⃣ Find the admin in the DB
    const admin = await User.findById(req.user.id).select("-password");

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // 2️⃣ Manually update each field if sent in the request
    if (req.body.name !== undefined && req.body.name !== "") {
      admin.name = req.body.name;
    }

    if (req.body.email !== undefined && req.body.email !== "") {
      admin.email = req.body.email;
    }

    if (req.body.designation !== undefined && req.body.designation !== "") {
      admin.designation = req.body.designation;
    }

    if (req.body.qualification !== undefined && req.body.qualification !== "") {
      admin.qualification = req.body.qualification;
    }

    if (req.body.experience !== undefined && req.body.experience !== "") {
      admin.experience = req.body.experience;
    }

    if (req.body.whatsapp !== undefined && req.body.whatsapp !== "") {
      admin.whatsapp = req.body.whatsapp;
    }

    if (req.body.country !== undefined && req.body.country !== "") {
      admin.country = req.body.country;
    }

    // 3️⃣ Handle image upload (only if a new one is provided)
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
