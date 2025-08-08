import express from "express";
import { authValidator } from "../../middlewares/authValidator.js";
import { registerController } from "../../controllers/registerController.js";
import { loginController } from "../../controllers/loginController.js";
import { resetPasswordController } from "../../controllers/resetPasswordController.js";
import { verifyOtpController } from "../../controllers/verifyOtpController.js";
import registerStudent from "../../controllers/studentRegistration.js";
import { forgotPassword } from "../../controllers/forgotPassword.js";

const authRouter = express.Router();

authRouter.post("/register-admin", authValidator, registerController);
authRouter.post("/admin-login", authValidator, loginController);
authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/verify-otp", verifyOtpController);
authRouter.post("/reset-password", resetPasswordController);
authRouter.post("/register-student", registerStudent);

// authRouter.post("/create-course", upload.single("thumbnail"), addCourse);
// authRouter.get("/courses", getCourses);
// authRouter.put("/updateStatus/:id", updateStatus);
// authRouter.delete("/deleteStudent/:id", deleteStudent);
// authRouter.delete("/deleteCourse/:id", deleteCourse);
// authRouter.get("/students", getAllStudents);

export default authRouter;
