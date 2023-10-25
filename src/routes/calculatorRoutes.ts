import { Router } from "express";


export const router =Router()

//middleware
// router.use(logger)

router.get("/",(req,res)=>{
    res.send({message:"calculator router is congifured perfectly",
    data:[
        {
            id:1,
            operation:1,
        },
        {
            id:2,
            operation:2,
        },
        {
            id:3,
            operation:3
        }

    ]

})
    console.log("hey guys you wanna move to the calculator route ? I got you")
})

router.get('/:id',(req,res)=>{
    res.send({
        message:"hey you are accessign the calculation as an id",
        id:req.params.id,
        operation:req.params.id


    })
})