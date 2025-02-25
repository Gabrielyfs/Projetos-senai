const { Router } = require("express");

const produtoController = require('../controllers/produtoController')

const router = Router()

// tipos de rotas
router.get("/", (req, res) => produtoController.getAll(req,res))
router.post("/", (req, res) => produtoController.create(req, res))
router.delete("/:id", (req, res) => produtoController.delete(req, res))
router.put("/:id", (req, res) => produtoController.update(req, res))

module.exports = router