import express from "express"
import { getPlayerInformation, login, showAllplayer, updateLevel } from "../controllers/player.controller.js"

const router = express.Router();

router.get("/all", showAllplayer)
// router.post("/add-player", addPlayer)
router.post("/login/:playerId", login)
router.get("/get-player-info/:playerId", getPlayerInformation)
router.post("/update-level/:playerId", updateLevel)
// router.post("/update-password?:playerId", )
// router.get("/get-match-history/:playerId/:history-count")
// router.post("/save-match-result", )


export { router } 

