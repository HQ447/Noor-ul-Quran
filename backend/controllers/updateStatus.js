import User from "../models/User.js";
import sendEmail from "../utils/sendEmail.js";

const updateStatus = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const student = await User.findById(id);
    if (!student) return res.json({ message: "Student not found" });

    student.status = "registered";
    await student.save();

    const emailHTML = `
              <div>
                <h2>Hi ${student.name}</h2>
                <p>Congratulation</p>
                <p>We review your application after consideration we approved your registration request . Enjoy your learning . Thankyou</p>
              </div>
            `;

    await sendEmail(student.email, "Registration Successfull", emailHTML);

    res.json({ message: "Student approved by Admin" });
  } catch (error) {
    console.log(error);
  }
};

export default updateStatus;
