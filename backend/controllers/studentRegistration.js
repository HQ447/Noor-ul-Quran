import User from "../models/User.js";
// controllers/authController.js
import sendEmail from "../utils/sendEmail.js";

const registerStudent = async (req, res) => {
  try {
    const { name, email, whatsapp, country, course, startDate } = req.body;

    // Basic validation
    if (!name || !email || !course) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    // Check for duplicate email
    const existingStudent = await User.findOne({ email });
    if (existingStudent) {
      return res.status(409).json({ message: "Email already registered." });
    }

    const newStudent = new User({
      name,
      email,
      whatsapp,
      country,
      course,
      startDate,
      role: "student",
    });

    await newStudent.save();

    const emailHTML = `
          <div>
            <h2>Hi ${name}</h2>
            <p>Your Registration Application Submitted Successfully</p>
            <p>We will inform you after instructor approval. Thankyou</p>
          </div>
        `;

    await sendEmail(email, "Request For Registration", emailHTML);

    res.status(201).json({
      message: "Student registered successfully.",
      student: newStudent,
    });
  } catch (error) {
    console.error("Error registering student:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export default registerStudent;
