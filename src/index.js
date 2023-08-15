import express from "express";
import db from "./Data/sqlite.js"
const server = express();

import Usuario from "./Models/usersM.js"

//MIDDLEWARE
server.use(express.json());

// ROTAS
import controledeUsuario from "./Controllers/usersC.js";
controledeUsuario(server, db);

import controledeProduto from "./Controllers/productsC.js";
controledeProduto(server, db);

// Default 
server.use((req, res) => {
    res.status(404).send("Page not found");
})

server.listen(3000, () => {
    console.log("API working on http://localhost:3000")
});



// Obs: Juliana me ajudou a fazer e  concluir o projeto :)