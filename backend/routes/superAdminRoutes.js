import express from "express";
import upload from "../middlewares/bookUpload.js";
import getAllTeachers from "../controllers/getAllTeacher.js";
import { tokenVerifier } from "../middlewares/tokenVerifier.js";
import getAllStudents from "../controllers/super admin/getAllStudents.js";
import { getTeacher } from "../controllers/super admin/getTeacher.js";
import getStudents from "../controllers/super admin/getStudents.js";

const router = express.Router();

//get all teachers/admins
router.get("/getAllTeachers", getAllTeachers);
router.get("/getAllStudents", tokenVerifier, getAllStudents);
router.get("/getTeacher/:id", getTeacher);
router.get("/getStudents/:id", tokenVerifier, getStudents);

export default router;
