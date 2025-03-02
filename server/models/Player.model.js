
const PlayerState = {
    INACTIVE: "inactive",
    ACTIVE: "active",
    INMATCHING: "inmatching",
    INGAME: "ingame",

}


class Player {
    #password
    constructor(id, username, password, server_id) {
        this.id = id;
        this.username = username;
        this.#password = password;
        this.server_id = server_id;
        this.matchHistory = [];
        this.level = 1;
        this.playerStatus = PlayerState.INACTIVE;
        this.currentMatchId = undefined;

        console.log(`player with id ${this.id} is created`)

    }
    login(){
        this.playerStatus = PlayerState.ACTIVE;
        console.log(`player ${this.id} is just login`)
    }

    joinMatch(){
        this.playerStatus = PlayerState.INMATCHING;
        console.log(`player ${this.id} is just join the queue`)
    }

    joinGame(matchId){
        this.currentMatchId = matchId;
        this.playerStatus = PlayerState.INGAME;
        console.log(`player ${this.id} is just join the match with gameId ${matchId}`)
        
    }

    matchPassword(password) {
        if (this.#password == password) {
            return true
        }
        return false
    }
    storeResult(matchScore){
        matchHistory.push({currentMatchId: this.currentMatchId, matchScore});
        console.log(`player ${this.id} get result ${matchScore} in match ${this.currentMatchId} `)
        this.currentMatchId = undefined
        
    }
    updateLevel(increasingLevel){
        this.level += increasingLevel;
        console.log(`${this.id} level in increasing by ${increasingLevel}. current is ${this.level}`)
        return this.level;
    }


}


export {
    Player
}