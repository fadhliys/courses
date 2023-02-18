import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Courses = db.define('courses', {
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING
    },
}, {
    freezeTableName:true
});

export default Courses;