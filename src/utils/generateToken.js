import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.TOKEN_SECRET, {expiresIn: "30d"});

  res.cookie('token', token, {
    httpOnly: true,
    secure: "production",
    sameSite: "None",
    maxAge: 30 * 24 * 60 * 60 * 1000,
    domain: "https://question-client-gamma.vercel.app"
  })
}

export default generateToken;