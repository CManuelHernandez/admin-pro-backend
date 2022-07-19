/* 
    Ruta: /api/todo/
*/

const { Router } = require("express");
const { getTodo, getDocumentosColeccion } = require("../controllers/busquedas");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campo");

const router = Router();

router.get("/:busqueda", validarCampos, getTodo);

router.get(
  "/coleccion/:tabla/:busqueda",
  validarCampos,
  getDocumentosColeccion
);

module.exports = router;
