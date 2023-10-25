// import { request } from 'express';
import express,{Request,Response} from 'express';
import { calculatorRouter, healthRouter } from './routes/app';
import { logger } from './middlewares/index';
// import * as dotenv  from 'dotenv';

// dotenv.config()


const app =express();
const port=3000

//middleware
app.use(logger)





app.use("/health",healthRouter)
app.use("/calculator",calculatorRouter)




app.get('/',(req:Request,res:Response)=>{
    res.send(`hello ${port}`)
})



app.get("/:id",(req:Request,res:Response)=>{
    console.log(`Query parameter:${JSON.stringify(req.query)}`)
    console.log(`Headers:${JSON.stringify(req.headers)}`)
    console.log(`Method:${req.method}`)
    res.status(200).send(`Hello ${req.params.id }`);
});



app.listen(port,()=>{
    console.log(`server is running on port ${port}...........`)
});

