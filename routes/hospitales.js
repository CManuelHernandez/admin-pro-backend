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

router.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre del hospital es necesario").not().isEmpty(),
    validarCampos,
  ],
  crearHospitales
);

router.put(
  "/:id",
  [
    validarJWT,
    check("nombre", "El nombre del hospital es necesario").not().isEmpty(),
  ],
  actualizarHospitales
);

router.delete("/:id", validarJWT, borrarHospitales);

module.exports = router;
