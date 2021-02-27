import 'reflect-metadata';
import express from 'express';
import "./database"
import { router } from './routers';

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