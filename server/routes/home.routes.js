import express from "express"
import { SERVER_ID} from "../data/serverInfo.js"

const router = express.Router();

const totalPlayer = 100
const activePlayer = 40
const activeMatches = 7
const maxMatchCapacity = 20 




router.get("/", (_, res) =>{
    res.send({"message": "it is gameverse"})
})

router.get("/info", (_, res) => {
    res.send({
        totalPlayer,
        activePlayer,
        activeMatches,
        maxMatchCapacity,
        SERVER_ID
    })
})


export default router;

