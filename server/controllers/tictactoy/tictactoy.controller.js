import { GameBoard } from "../../models/tictactaoy/game" 

import { matches } from "../../data/initialData";

const startMatch = (matchId) => {
    const game = new GameBoard();
    const match = {
        matchId,
        game
    }
}


const findMatch = (matchId) => {
    const match = matches.find((match) => match.matchId == matchId)
    if(!match){
        throw new Error(`match with the matchId ${matchId} not found`)
    }

}

const submitGuess = (req, res) => {

}