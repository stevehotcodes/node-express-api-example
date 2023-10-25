import { Router } from "express";


export const router=Router();
// router.use(logger)

router.get('/',(req,res)=>{
    res.send({mesage:"hello ok"});
    console.log("I am the health router")
})