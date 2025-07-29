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

const router = express.Router();

router.get("/getAdmins", tokenVerifier, getAdmins);
router.post(
  "/create-course",
  tokenVerifier,
  upload.single("thumbnail"),
  addCourse
);
router.get("/courses", tokenVerifier, getCourses);
router.put("/updateStatus/:id", tokenVerifier, updateStatus);
router.delete("/deleteStudent/:id", tokenVerifier, deleteStudent);
router.delete("/deleteCourse/:id", tokenVerifier, deleteCourse);
router.get("/students", tokenVerifier, getAllStudents);

export default router;
