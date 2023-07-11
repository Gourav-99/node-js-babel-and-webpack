import { User } from "../database/Schema/User";
import { checkPass, hashPassword } from "../utils/auth.utils";
import { generateAuthToken } from "../utils/token";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({
        message: "User already exists!",
        data: null,
      });
    }
    const hashedPassword = await hashPassword(password);

    const createUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      message: "User created successfully",
      data: createUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
        success: false,
        data: null,
      });
    }
    const isCorrectPassword = await checkPass(password, user.password);
    if (!isCorrectPassword) {
      return res.status(402).json({
        message: "Invalid user details",
        success: false,
        data: null,
      });
    }
    console.log(user.Name);
    const token = generateAuthToken({
      email: email,
      userName: user.Name,
      id: user.id,
    });

    // res.setHeader("Authorization", `Bearer ${token}`);
    return res
      .cookie("access_token", token, {
        httpOnly: false, //when set to true it cann't be accessed from browser or client side
      })
      .status(200)
      .json({
        message: "Logged in Successfully",
        success: true,
        token: token,
        user: {
          email: email,
          userName: user.Name,
        },
      });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "internal server error",
      success: false,
      data: null,
    });
  }
};
