import courseCategories from "../models/CourseCategoriesModel.js";

export const getCourseCategories = async(req, res) => {
    try {
        const course_categories = await courseCategories.findAll();
        res.status(200).json({course_categories});
    } catch (error) {
        console.log(error);
    }
}

export const createCourseCategory = async (req, res) => {
    const { name } = req.body;
    try {
        await courseCategories.create({
            name: name
        });
        res.status(201).json({msg: "Kategori Kursus telah dibuat"});
    } catch (error) {
        console.log(error);
    }
}

export const updateCourseCategory = async (req, res) => {
    const { name } = req.body;
    try {
        await courseCategories.update({
            name: name
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

export const deleteCourseCategory = async (req, res) => {
    try {
        await courseCategories.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Kategori Kursus berhasil dihapus"});
    } catch (error) {
        console.log(error);
    }
}