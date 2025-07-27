import User from "../models/User.js";

export const verifyOtpController = async (req, res) => {
  try {
    const { email, otp } = req.body;
    console.log("Incoming:", req.body);

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Convert both to string to avoid type mismatch
    const storedOtp = String(user.otp);
    const submittedOtp = String(otp);

    if (
      storedOtp !== submittedOtp ||
      !user.otpExpiry ||
      user.otpExpiry < new Date()
    ) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    console.log("OTP verified successfully for:", email);
    res.status(200).json({ ok: true, message: "OTP verified" });
  } catch (error) {
    console.error("OTP verification error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
