import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    whatsapp: { type: String },
    country: { type: String },
    course: { type: String },
    startDate: { type: Date },
    password: { type: String, required: true },
    role: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "registered", "rejected"],
      default: "pending",
    },
    feeStatus: { type: String, enum: ["clear", "unclear"], default: "unclear" },
    otp: { type: Number },
    otpExpiry: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
