import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import authRouter from "./routes/auth.route.js"

import cors from "cors"




const app = express()
dotenv.config();
const PORT = process.env.PORT || 5000


app.use

app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true}));
app.use("/api/auth" , authRouter);

app.use(cors());





app.listen(PORT , ()=>{
	connectDB();
    console.log(`server running on port ${PORT}`)
    connectDB();
})

