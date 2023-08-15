import Produto from "../Models/productsM.js";

// R produtos
const controledeProduto = (server, db) => {
    //get
    server.get("/produto", (req, res) => {
        res.send("testando produto - GET")
    });

    //post
    server.post("/produto", (req, res) => {
        const { id, title, description, value } = req.body;
        const newProduct = new Produto(id, title, description, value);
        res.json(newProduct);
    });

    //put
    server.put("/produto", (req, res) => {
        res.send("testando produto - PUT")
    });

    //delete
    server.delete("/produto", (req, res) => {
        res.send("testando produto - DELETE")
    });
}

export default controledeProduto;