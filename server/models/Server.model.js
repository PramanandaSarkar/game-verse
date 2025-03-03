import { SERVER_ID } from "../data/serverInfo";

class Server {
    constructor(){
        this.serverId = SERVER_ID;
        this.players = []
        this.matches = []
    }
}