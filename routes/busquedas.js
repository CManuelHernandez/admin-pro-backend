/* 
    Ruta: /api/login
*/

const { Router } = require("express");
const { getTodo } = require("../controllers/busquedas");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campo");

const router = Router();

router.get("/:busqueda", validarCampos, getTodo);

module.exports = router;
