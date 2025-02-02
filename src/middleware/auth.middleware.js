import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

const protect = async (req, res, next) => {
  try {
    let token = req.cookies.token;

    if (!token) {
      return res.status(401).json({message: "UnAuthorized User, no Token"});
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    req.user = await User.findById(decoded.userId).select('-password');
    next();
  }
  catch (err) {
    res.status(401).json({message: err.message})
  }

}

export { protect };