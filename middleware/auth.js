const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).send('No token provided');
  }
  try {
    const decode = jwt.verify(token, process.env.jwtSecret);
    req.user = decode.user;
    next();
  } catch (error) {
    res.status(401).send('Not valid Token');
  }
}
