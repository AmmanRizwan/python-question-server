import User from "../model/user.model.js";
import generateToken from '../utils/generateToken.js';

const userAuth = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
      res.status(200).json({
        _id: user._id,
        email: user.email,
        name: user.name
      })
    } else {
      res.status(400).json({message: "Invalid Email or Password!"})
    }
  }
  catch (err) {
    res.status(400).json({message: err.message});
  }
}

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({email: email});

    if (userExist) {
      return res.status(400).json({ message: "User Already Exists!"});
    }

    const user = await User.create({
      email,
      password,
      name
    })

    if (user) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        email: user.email,
        name: user.name
      })
    } else {
      res.status(400).json({message: "Invalid User Data"});
    }

  }
  catch (err) {
    res.status(400).json({message: err.message});
  }
}

const userLogout = async (req, res) => {
  try {
    res.cookie('token', '', {
      httpOnly: true,
      expires: new Date(0),
    })
    return res.status(200).json({messsage: "Logout Successfully"});
  }
  catch (err) {
    res.status(400).json({message: err.message});
  }
}

const userProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      })
    }

    res.status(401).json("Un expected Error!");
  }
  catch (err) {
    res.status(400).json({message: err.message});
  }
}

const userUpdateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
    }
    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email
    })
  }
  catch (err) {
    res.status(400).json({message: err.message});
  }
}

export { userAuth, userLogout, userProfile, userRegister, userUpdateProfile };