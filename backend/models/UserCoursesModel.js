import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const userCourses = db.define('user_courses', {
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    users_id:{
        type: DataTypes.BIGINT,
    },
    course_id:{
        type: DataTypes.BIGINT,
    },
}, {
    freezeTableName:true
});

export default userCourses;