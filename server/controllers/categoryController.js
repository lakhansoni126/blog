import categoryModel from "../models/catehoryModel.js";


class CategoryController {
    static getAllCategories = async (req, res) => {
        try {
            const fetchAllCategories = await categoryModel.find({});
            return res.status(200).json(fetchAllCategories);
        }catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };
    static addNewCategory = async (req, res) => {
        const { title } = req.body;
        try {
            if (title) {
                const newCategory = new categoryModel({ title, });
                const savedCtegory = await newCategory.save();

                if (savedCtegory) {
                    return res.status(200).json({ message: "category added " });
                }
            }
            else {
                return res.status(400).json({ message: "all field are required" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };
    
}

export default CategoryController;