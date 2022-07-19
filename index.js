require("dotenv").config();

const express = require("express");
let cors = require("cors");

const { dbConnection } = require("./database/config");

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

// Lectura y parse del body
app.use(express.json());

// Base de datos
dbConnection();

// Rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/hospitales", require("./routes/hospitales"));
app.use("/api/medicos", require("./routes/medicos"));
app.use("/api/login", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en puerto " + process.env.PORT);
});
