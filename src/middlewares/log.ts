import { NextFunction, Request } from "express"

export function logger (req:Request,res:Response,next:NextFunction){
    console.log(`
    {
    HTTP METHOD:${req.method} , 
     Client's IP Address:${req.ip},
     URL:${req.originalUrl}

}`)
next()
}