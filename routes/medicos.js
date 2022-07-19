/*
    ruta: '/api/medico'
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campo");

const { validarJWT } = require("../middlewares/validar-jwt");

const {
  getMedicos,
  crearMedico,
  actualizarMedico,
  borrarMedico,
} = require("../controllers/medicos");

const router = Router();

router.get("/", getMedicos);

router.post("/", [], crearMedico);

router.put("/:id", [], actualizarMedico);

router.delete("/:id", borrarMedico);

module.exports = router;
