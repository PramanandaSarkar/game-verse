import {Player} from "../models/Player.model.js"
import {SERVER_ID} from "./serverInfo.js"

const player1 = new Player(10001, "alice1234", 123, SERVER_ID)
const player2 = new Player(10002, "bob1234", 123, SERVER_ID)


const players = [player1, player2]


const matches = []



export {
    players,
    matches
}