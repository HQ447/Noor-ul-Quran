import express from "express";
import getAdmins from "../controllers/getAdmin.js";
import { addCourse } from "../controllers/addCourse.js";
import getCourses from "../controllers/getCourses.js";
import updateStatus from "../controllers/updateStatus.js";
import deleteStudent from "../controllers/deleteStudent.js";
import deleteCourse from "../controllers/deleteCourse.js";
import getAllStudents from "../controllers/getStudents.js";
import upload from "../middlewares/upload.js";
import { tokenVerifier } from "../middlewares/tokenVerifier.js";
import findCourse from "../controllers/findCourse.js";
import { uploadCloud } from "../middlewares/cloudinaryUpload.js";
import {
  getAdminProfile,
  updateAdminProfile,
} from "../controllers/profileController.js";

const router = express.Router();

router.get("/getAdmins", tokenVerifier, getAdmins);
router.post(
  "/create-course",
  tokenVerifier,
  upload.single("thumbnail"),
  addCourse
);
router.get("/courses", getCourses);
router.get("/course/:id", findCourse);
router.put("/updateStatus/:id", tokenVerifier, updateStatus);
router.delete("/deleteStudent/:id", tokenVerifier, deleteStudent);
router.delete("/deleteCourse/:id", tokenVerifier, deleteCourse);
router.get("/students", tokenVerifier, getAllStudents);
router.get("/getAdminProfile", tokenVerifier, getAdminProfile);
router.put(
  "/updateProfile",
  tokenVerifier,
  uploadCloud.single("img"),
  updateAdminProfile
);
export default router;
