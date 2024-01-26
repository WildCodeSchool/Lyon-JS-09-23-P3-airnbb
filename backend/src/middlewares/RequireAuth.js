const jwt = require("jsonwebtoken");
const Parent = require("../models/ParentSchemaModel");

async function requireAuth(req, res, next) {
  // verify authentication

  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  // geting only the token not the Bearer
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET_KEY);

    // user is verify and get only the id not all the data
    req.parentVerified = await Parent.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    return res.status(401).json({ error: "Request is not authorized" });
  }
  return null;
}

module.exports = requireAuth;
