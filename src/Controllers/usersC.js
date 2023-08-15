import Usuario from "../Models/usersM.js"

// R Usuários
const controledeUsuario = (server) => {
    //get
    server.get("/usuario", (req, res) => {
        res.send("testando usuário  - GET")
    });

    //post
    server.post("/usuario", (req, res) => {
        const { id, name, email, password } = req.body;
        const newUser = new Usuario(id, name, email, password);
        res.json(newUser);
    });

    //put
    server.put("/usuario", (req, res) => {
        res.send("testando usuário - PUT")
    });

    //delete
    server.delete("/usuario", (req, res) => {
        res.send("testando usuário - DELETE")
    });
}

export default controledeUsuario;