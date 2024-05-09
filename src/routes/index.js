const { Router } = require("express");
const user = require("./subRoutes/user.js");
const posting = require("./subRoutes/posting.js");
const section = require("./subRoutes/sections.js");
const category = require("./subRoutes/category.js");
const contact = require("./subRoutes/contact.js");
const cloudinary = require("./subRoutes/cloudinary.js");

const { keySecretVerify } = require("../middlewares/ketSecretVerify.js");
const verifyToken = require("../middlewares/jwtVerify.js");
const verificationToken = require("./subRoutes/token.js");
const middlewareLoadFirstData = require("../middlewares/loadFirstData.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/", keySecretVerify);
router.use("/", middlewareLoadFirstData);
router.post("/verificationToken", verifyToken, verificationToken);

router.use("/posting", posting);
router.use("/section", section);
router.use("/contact", contact);
router.use("/user", user);
router.use("/category", category);
router.use("/cloudinary", cloudinary);

module.exports = router;
