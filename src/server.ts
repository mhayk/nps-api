import 'reflect-metadata';
import express from 'express';
import "./database"

const app = express();


/**
 * GET => Liest/Search
 * POST => Save/Create
 * Put => Update
 * DELETE => Delete
 * PATH => specific edition
 */

app.get("/users", (request, response) => {
    return response.json({ message: "Hello World" })
})

app.post("/users", (request, response) => {
    return response.json({ message: "Data has been saved successfully." })
})

app.listen(3334, () => {
    console.log("Server is running!")
})