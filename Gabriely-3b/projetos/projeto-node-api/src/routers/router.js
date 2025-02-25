const { Router } = require("express");
const userRoutes = require("./userRoutes")
const produtoRoutes = require("./produtoRoutes")

const router = Router();
router.use("/user", userRoutes)
router.use("/produto", produtoRoutes)

module.exports = router;