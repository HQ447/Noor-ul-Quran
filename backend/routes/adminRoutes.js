import express from "express";
import getAdmins from "../controllers/getAdmin.js";
import { addCourse } from "../controllers/addCourse.js";
import getCourses from "../controllers/getCourses.js";
import updateStatus from "../controllers/updateStatus.js";
import deleteStudent from "../controllers/deleteStudent.js";
import deleteCourse from "../controllers/deleteCourse.js";
import getAllStudents from "../controllers/getStudents.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.get("/getAdmins", getAdmins);
router.post("/create-course", upload.single("thumbnail"), addCourse);
router.get("/courses", getCourses);
router.put("/updateStatus/:id", updateStatus);
router.delete("/deleteStudent/:id", deleteStudent);
router.delete("/deleteCourse/:id", deleteCourse);
router.get("/students", getAllStudents);

export default router;
