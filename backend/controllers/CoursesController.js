import Courses from "../models/CoursesModel.js";

export const getCourses = async(req, res) => {
    try {
        const courses = await Courses.findAll();
        res.status(200).json({courses});
    } catch (error) {
        console.log(error);
    }
}

export const createCourse = async (req, res) => {
    const { title, course_category_id } = req.body;
    try {
        await Courses.create({
            title: title,
            course_category_id: course_category_id
        });
        res.status(201).json({msg: "Kategori Kursus telah dibuat"});
    } catch (error) {
        console.log(error);
    }
}

export const updateCourse = async (req, res) => {
    const { title, course_category_id } = req.body;
    try {
        await Courses.update({
            title: title,
            course_category_id: course_category_id
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

export const deleteCourse = async (req, res) => {
    try {
        await Courses.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Kategori Kursus berhasil dihapus"});
    } catch (error) {
        console.log(error);
    }
}