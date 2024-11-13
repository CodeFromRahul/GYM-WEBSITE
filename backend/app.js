import express from "express"
import { config } from "dotenv"
import cors from "cors"
import { sendEmail } from "./utils/sendEmial.js"


const app = express()

const router = express.Router()

config({path:"./config.env"})

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['POST'],
    credentials:true,

}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

router.post("/send/mail",async(req,res,next)=>{
    const {name,email,message}= req.body;
    console.log(name)
    console.log(email)
    console.log(message)
    if(!name||!email||!message){
        return next(res.status(400).json({
            success:false,
            message:"please provide all the details"
                    }))

    }
    try {
        await sendEmail({
            email:"rahulvish194002@student.sfit.ac.in",
            subject:"GYM WEBSITE ",
            message,
            userEmail:email,
            
        });
        res.status(200).json({
            success:true,
            message:"Message send successfully"
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success:false,
            message:"Internal Server Error"

        })
        
    }


})
router.get("/",(req,res,next)=>{
    res.json({success:true})
})


app.use(router)


app.listen(process.env.PORT,()=>{
    console.log(`server is running a ${process.env.PORT}`)
});