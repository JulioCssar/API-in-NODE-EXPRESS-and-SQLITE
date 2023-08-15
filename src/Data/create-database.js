import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./src/Data/database.db");

const USERS = `
    CREATE TABLE "Users"(
        "id" INTEGER PRIMARY KEY,
        "name" VARCHAR(50),
        "email" VARCHAR(50),
        "senha" VARCHAR(30)
    );
`

const PRODUCTS = `
    CREATE TABLE "Products"(
        "id" INTEGER PRIMARY KEY,
        "title" VARCHAR(50),
        "description" VARCHAR(50),
        "value" FLOAT
    );
`

const CreateUsers = () => {
    db.run(USERS, (error) => {
        if (error) {
            console.log("Something went wrong..." + error.message);
        }
    })
};

const CreateProducts = () => {
    db.run(PRODUCTS, (error) => {
        if (error) {
            console.log("Something went wrong..." + error.message);
        }
    })
};

//tabela
db.serialize(() => {
    CreateUsers();
    CreateProducts();
});