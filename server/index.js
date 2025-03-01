const PlayerStatus = Object.freeze({
    INGAME: "INGAME",
    INMATCHMAKING: "INMATCHMAKING",
    INHOME: "INHOME"
});

const MatchStatus = Object.freeze({
    RUNNING: "RUNNING",
    COMPLETED: "COMPLETED",
    STARTING: "STARTING"
});

class Player{
    constructor(id, username, password, serverId, ){
        this.id = id;
        this.username = username;
        this.serverId = id;
        this.history = new Map();
        this.password = password;
    }
    toString(){
        return "ID: ${this.id}"
    }
    

}



class Match{
    constructor(id){
        this.id = id;
        this.MatchStatus =  MatchStatus.STARTING;
        this.players = []
    }
    toString(){
        
        return "ID: ${this.id}"
    }
    addPlayer(id){
        this.players.push(id)
    }

    
}

const Queue = [];
const SERVERID = 101;
const players = []
const matches = []

const player1 = new Player(10001, "bob", 123, SERVERID)
const player2 = new Player(10002, "bob", 123, SERVERID)
const player3 = new Player(10003, "bob", 123, SERVERID)


players.push(player1)
players.push(player2)
players.push(player3)

const match1 = new Match(1000001)
match1.addPlayer(player1.id)
matches.push(match1)


console.log("Players")

for(player of players){
    console.log(player)
}
console.log("matches")
for(match of matches){
    console.log( match)
}

