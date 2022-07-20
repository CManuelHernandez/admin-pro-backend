const { response } = require("express");
const bcrypt = require("bcryptjs");

const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/jwt");
const { googleVerify } = require("../helpers/google-verify");

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Verificar email
    const usuarioDB = await Usuario.findOne({ email });

    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        msg: "Credenciales no válidos",
      });
    }

    // Verificar contraseña
    const validPassword = bcrypt.compareSync(password, usuarioDB.password);
    if (!validPassword) {
      return res.status(404).json({
        ok: false,
        msg: "Contraseña no válidos",
      });
    }

    //Generar un token
    const token = await generarJWT(usuarioDB.id);

    res.json({
      ok: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado... revisar logs",
    });
  }
};

const googleSingIn = async (req, res = response) => {
  try {
    const { email, name, picture } = await googleVerify(req.body.token);

    res.json({
      ok: true,
      email,
      name,
      picture,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Token de Google no es corecto",
    });
  }
};

module.exports = {
  login,
  googleSingIn,
};
