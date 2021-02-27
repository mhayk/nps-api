import 'reflect-metadata';
import express from 'express';
import createConnection from "./database"
import { router } from './routers';

createConnection()
const app = express();

/**
 * GET => Liest/Search
 * POST => Save/Create
 * Put => Update
 * DELETE => Delete
 * PATH => specific edition
 */

app.use(express.json());
app.use(router);

export { app };