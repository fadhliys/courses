import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import Admin from "./models/AdminModel.js";
import courseCategories from "./models/CourseCategoriesModel.js";
import Courses from "./models/CoursesModel.js";
import userCourses from "./models/UserCoursesModel.js";
import Users from "./models/UserModel.js";
import { Sequelize } from "sequelize";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

(async () => {
    await db.sync({force: true});
})();

app.use(cors({ credentials:true, origin:'http://localhost:3000' }))
app.use(cookieParser());
app.use(express.json());
app.use(router);

Users.hasMany(userCourses);
Courses.hasMany(userCourses);
courseCategories.hasMany(Courses);
userCourses.belongsTo(Users);
userCourses.belongsTo(Courses);
Courses.belongsTo(courseCategories);

app.listen(5000, ()=> console.log('Server running at port 5000'));