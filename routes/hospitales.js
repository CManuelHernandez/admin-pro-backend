/*
    ruta: '/api/hospitales'
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campo");

const { validarJWT } = require("../middlewares/validar-jwt");

const {
  getHospitales,
  crearHospitales,
  actualizarHospitales,
  borrarHospitales,
} = require("../controllers/hospitales");

const router = Router();

router.get("/", getHospitales);

router.post("/", [], crearHospitales);

router.put("/:id", [], actualizarHospitales);

router.delete("/:id", borrarHospitales);

module.exports = router;
