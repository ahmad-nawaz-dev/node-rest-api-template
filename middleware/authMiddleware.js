const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next, allowedRoles = []) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send({ message: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    if (allowedRoles.length > 0 && !allowedRoles.includes(req.user.role)) {
      return res.status(403).send({ message: "Access denied" });
    }

    next();
  } catch (err) {
    res.status(401).send({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
