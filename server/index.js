import express from "express"
import cors from "cors"
import {SERVER_ID} from "./data/serverInfo.js"

import router from "./routes/home.routes.js"


const app = express()



app.use(cors())
app.use(express.json())




app.use("/", router)

const port = 4000;


app.listen(port, ()=> {
    
    console.log(`server(${SERVER_ID}) started at http://localhost:${port}`)
})



