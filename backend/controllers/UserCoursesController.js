import userCourses from "../models/UserCoursesModel.js";

export const getUserCourses = async(req, res) => {
    try {
        const courses = await userCourses.findAll();
        res.status(200).json({courses});
    } catch (error) {
        console.log(error);
    }
}

export const createUserCourse = async (req, res) => {
    const { users_id, course_id } = req.body;
    try {
        await userCourses.create({
            users_id: users_id,
            course_id: course_id
        });
        res.status(201).json({msg: "User Courses telah dibuat"});
    } catch (error) {
        console.log(error);
    }
}

export const updateUserCourse = async (req, res) => {
    const { users_id, course_id } = req.body;
    try {
        await userCourses.update({
            users_id: users_id,
            course_id: course_id
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Kategori Kursus berhasil diubah"});
    } catch (error) {
        console.log(error);
    }
}

export const deleteUserCourse = async (req, res) => {
    try {
        await userCourses.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Kategori Kursus berhasil dihapus"});
    } catch (error) {
        console.log(error);
    }
}