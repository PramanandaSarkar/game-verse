import { SERVER_ID } from "../data/serverInfo";
import { Player } from "./Player";


const GameType = {
    TIC_TAC_TOY: 2,
    GUESSING_GAME_2P: 2,
    GUESSING_GAME_4P: 4,
    GUESSING_GAME_6P: 6,
    GUESSING_GAME_8P: 10,
}


class Matchmaker {
    constructor(){
        this.gameQueues = []
        for (let i = 0; i < GameType.length; i++){
            this.gameQueues.push(new Map()) // this map size will be the  max number of players
            
        }
        
    }


    makeQueue(playerId, gameType, weight){
        for (let i = 0; i < GameType.length; i++){
            if (gameType == GameType[i]){
                if (this.gameQueues[i].has(playerId)){
                    this.gameQueues[i].set(playerId, this.gameQueues[i].get(playerId) + weight)
                }
                else this.gameQueues[i].set(playerId, weight)
            }
        }

    }
    makeMatch(gameType){
        for (let i = 0; i < GameType.length; i++){
            if (gameType == GameType[i] ){
                // take neccessary number of players which has max Weight and create a match 
                if (this.gameQueues[i].size > GameType[i].size){
                    
                }
                
            }
        }
        
    }
}


class Game {
    constructor(teamCount, totalPlayerCount){
        this.gameController = new GameController();
        this.teamCount = teamCount;
        this.totalPlayerCount = totalPlayerCount;
        this.teams = [];
    }
}
class GameController {
    
}

class InfoProvider {

}

class PlayerController{
    constructor(players){
        this.players= players;
    }


}

class Server {
    constructor(){
        this.games = []
        this.players = [
            new Player(10001, "devid", 123, SERVER_ID),
            new Player(10002, "Miller", 123, SERVER_ID),
            new Player(10003, "Alice", 123, SERVER_ID),
            new Player(10004, "Aurther", 123, SERVER_ID),
            new Player(10005, "Jhon", 123, SERVER_ID),
        ]
        this.matchMaker = new Matchmaker()
        this.playerController = new PlayerController(players);

        
        
    }


    joinQueue(playerId, gameType){
        const player = this.players.find((id) => id === playerId)
        player.joinQueue(gameType)
        this.matchMaker.joinQueue(playerId, gameType)
    }

    getPlayers(){
        return players
    }
    getPlayerById(playerId){
        const player = this.players.find((id) => id === playerId)
        return player
    }
    getMatch(playerId, gameType) {
        const player = this.players.find((id) => id === playerId)
        const match = this.matchMaker.getMatch(playerId, gameType);
        
    }
    
}


class ServerRequestAHandeller{
    
}