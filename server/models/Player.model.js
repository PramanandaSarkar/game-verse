
const PlayerState = {
    INACTIVE: "inactive",
    ACTIVE: "active",
    INMATCHING: "inmatching",
    INGAME: '"ingame',

}


class Player {
    constructor(id, username, password, server_id) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.server_id = server_id;
        this.matchHistory = [];
        this.level = 1;
        this.playerStatus = PlayerState.INACTIVE;
        this.currentMatchId = undefine;

    }
    login(){
        this.playerStatus = PlayerState.ACTIVE;
    }

    joinMatch(){
        this.playerStatus = PlayerState.INMATCHING;
    }

    joinGame(matchId){
        this.currentMatchId = matchId;
        this.playerStatus = PlayerState.INGAME;
        
    }

    storeResult(matchScore){
        matchHistory.push({this.currentMatchId, matchScore});
        this.currentMatchId = undefine
    }


}