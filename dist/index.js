"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { request } from 'express';
const express_1 = __importDefault(require("express"));
const app_1 = require("./routes/app");
const index_1 = require("./middlewares/index");
// import * as dotenv  from 'dotenv';
// dotenv.config()
const app = (0, express_1.default)();
const port = 3000;
//middleware
app.use(index_1.logger);
app.use("/health", app_1.healthRouter);
app.use("/calculator", app_1.calculatorRouter);
app.get('/', (req, res) => {
    res.send(`hello ${port}`);
});
app.get("/:id", (req, res) => {
    console.log(`Query parameter:${JSON.stringify(req.query)}`);
    console.log(`Headers:${JSON.stringify(req.headers)}`);
    console.log(`Method:${req.method}`);
    res.status(200).send(`Hello ${req.params.id}`);
});
app.listen(port, () => {
    console.log(`server is running on port ${port}...........`);
});
