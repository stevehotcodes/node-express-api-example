"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
//middleware
// router.use(logger)
exports.router.get("/", (req, res) => {
    res.send({ message: "calculator router is congifured perfectly",
        data: [
            {
                id: 1,
                operation: 1,
            },
            {
                id: 2,
                operation: 2,
            },
            {
                id: 3,
                operation: 3
            }
        ]
    });
    console.log("hey guys you wanna move to the calculator route ? I got you");
});
exports.router.get('/:id', (req, res) => {
    res.send({
        message: "hey you are accessign the calculation as an id",
        id: req.params.id,
        operation: req.params.id
    });
});
