import express from "express";
import { authValidator } from "../../middlewares/authValidator.js";
import { registerController } from "../../controllers/registerController.js";
import { tokenVerifier } from "../../middlewares/tokenVerifier.js";
import { loginController } from "../../controllers/loginController.js";
import { forgotPassword } from "../../controllers/ForgotPassword.js";
import { resetPasswordController } from "../../controllers/resetPasswordController.js";
import { verifyOtpController } from "../../controllers/verifyOtpController.js";

const authRouter = express.Router();

authRouter.post("/register-admin", authValidator, registerController);
authRouter.post("/admin-login", authValidator, loginController);
authRouter.post("/fogot-password", forgotPassword);
authRouter.post("/verify-otp", verifyOtpController);
authRouter.post("/reset-password", resetPasswordController);

export default authRouter;
