import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


class AuthController {
    static userRegistration = async (req, res) => {
        const { username, email, password } = req.body;
        try {
            if (username && email && password) {
                const isUser = await authModel.findOne({ email: email });
                if (!isUser) {
                    // password hashing
                    const genSalt = await bcryptjs.genSalt(10);
                    const hashedPassword = await bcryptjs.hash(password, genSalt);

                    // saave a user
                    const newUser = authModel({
                        username,
                        email,
                        password: hashedPassword,
                    });

                    const savedUSer = await newUser.save();
                    if (savedUSer) {
                        return res
                            .status(200)
                            .json({ message: "user registreation successfull" });

                    }

                } else {
                    return res.status(400).json({ message: "Email Already Exists" });
                }

            } else {
                return res.status(400).json({ message: "all fields are required " });
            }

        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };
    static userLogin = async (req, res) => {
        const { email, password } = req.body;
        try {
            if (email && password) {
                const isEmail = await authModel.findOne({ email: email });
                if (isEmail) {
                    if (isEmail.email === email && (await bcryptjs.compare(password, isEmail.password))) {
                        //generate token

                        const token = jwt.sign({ userID: isEmail._id }, "yo", { expiresIn: "2d", });

                        return res.status(200).json({ message: "login successfull", token, name: isEmail.username, });


                    } else {
                        return res.status(400).json({ message: "enter vaild credentials" });
                    }

                } else {
                    return res.status(400).json({ message: "enter vaild email " });
                }
            } else {
                return res.status(400).json({ message: "all fields are required " });
            }

        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };
};

export default AuthController;

