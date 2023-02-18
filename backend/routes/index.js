import express from "express";
import { 
    getAdmin, 
    registerAdmin, 
    loginAdmin, 
    logoutAdmin,
} from "../controllers/AdminController.js";
import {
    getCourseCategories,
    createCourseCategory,
    updateCourseCategory,
    deleteCourseCategory,
} from "../controllers/CourseCategoriesController.js";
import {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse,
} from "../controllers/CoursesController.js";
import {
    getUserCourses,
    createUserCourse,
    updateUserCourse,
    deleteUserCourse,
} from "../controllers/UserCoursesController.js";
import {
    getUsers,
    registerUsers,
    loginUsers,
    logoutUsers,
    updateUsers,
} from "../controllers/UsersController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshTokenAdmin } from "../controllers/RefreshTokenAdminController.js";
import { refreshTokenUsers } from "../controllers/RefreshTokenUsersController.js";

const router = express.Router();

//admin
router.get('/admin', verifyToken, getAdmin);
router.post('/admin', registerAdmin);
router.post('/login_admin', loginAdmin);
router.get('/token_admin', refreshTokenAdmin);
router.delete('/logout_admin', logoutAdmin);

//course_categories
router.get('/course_categories', getCourseCategories);
router.post('/course_categories', createCourseCategory);
router.patch('/course_categories/:id', updateCourseCategory);
router.delete('/course_categories/:id', deleteCourseCategory);

//courses
router.get('/courses', getCourses);
router.post('/courses', createCourse);
router.patch('/courses/:id', updateCourse);
router.delete('/courses/:id', deleteCourse);

//user_courses
router.get('/user_courses', getUserCourses);
router.post('/user_courses', createUserCourse);
router.patch('/user_courses/:id', updateUserCourse);
router.delete('/user_courses/:id', deleteUserCourse);

//users
router.get('/users', verifyToken, getUsers);
router.post('/users', registerUsers);
router.post('/login_users', loginUsers);
router.get('/token_users', refreshTokenUsers);
router.delete('/logout_users', logoutUsers);
router.patch('/users/:id', updateUsers);

export default router;