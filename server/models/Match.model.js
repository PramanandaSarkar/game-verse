const MatchStates = {
    "STARTING" : "starting",
    "READY": "READY"
    "RUNNING" : "running",
    "COMPLETED": "completed"
}

class Match{
    constructor(id, matchCapacity){
        this.id = id;
        this.players = []    // stores only player id here
        this.matchStatus = MatchStates.STARTING
        this.matchCapacity = matchCapacity
        this.currentActivePlayer = 0
    }

    addplayer(id){
        if (this.matchStatus !== MatchStates.STARTING){
            throw new Error("Match capacity is already full")
        }


        const found = this.players.find((playerId) => playerId == id );

        if (found) {
            throw new Error(`${playerId} is already in the match`);
            
        }

        this.players.push(id)
        this.currentActivePlayer += 1
        if (this.currentActivePlayer === this.matchCapacity){
            this.matchStatus = MatchStates.READY;
        }
    }

    
}