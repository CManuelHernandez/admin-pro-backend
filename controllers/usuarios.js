const Usuario = require("../models/usuario");

const getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find({}, "nombre email role google");

  res.json({
    ok: true,
    usuarios,
  });
};

const crearUsuarios = async (req, res) => {
  const { email, password, nombre } = req.body;

  const usuario = new Usuario(req.body);

  await usuario.save();

  res.json({
    ok: true,
    usuario,
  });
};

module.exports = {
  getUsuarios,
  crearUsuarios,
};
