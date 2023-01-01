import express from "express";
import AuthController from "../controllers/authController.js";
import BlogController from "../controllers/blogController.js";
import CategoryController from "../controllers/categoryController.js";
import categoryModel from "../models/catehoryModel.js";
import multer from "multer";
import checkIsUserAuthenticated from "../midddlewares/authMiddleware.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `public/upload/`);
    },

    filename: function (req, file, cb) {
        cb(null, `${ Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/user/register", AuthController.userRegistration);
router.post("/user/login", AuthController.userLogin);

// protected routes



router.get("/get/allBlogs", BlogController.getAllBlog,checkIsUserAuthenticated);
router.post("/add/blog", upload.single("thumbnail"),checkIsUserAuthenticated, BlogController.addNewBlog);
router.get("/get/blog/:id", BlogController.getSingleBlog,checkIsUserAuthenticated);

router.get("/get/categories", CategoryController.getAllCategories,checkIsUserAuthenticated);
router.post("/add/category", CategoryController.addNewCategory,checkIsUserAuthenticated);


export default router;