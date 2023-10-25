"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
function logger(req, res, next) {
    console.log(`
    {
    HTTP METHOD:${req.method} , 
     Client's IP Address:${req.ip},
     URL:${req.originalUrl}

}`);
    next();
}
exports.logger = logger;
