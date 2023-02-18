import { Sequelize } from "sequelize";

const db = new Sequelize('cariilmu_db', 'root', '', {
    host: "localhost",
    dialect: "mysql",
});

export default db;