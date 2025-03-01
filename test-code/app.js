const express = require("express");

// Player class
class Player {
    constructor(name, id, serverId) {
        this.name = name;
        this.id = id;
        this.serverId = serverId;
    }

    getId() {
        return this.id;
    }
}

// Game class
class Game {
    constructor(name, gameId) {
        this.name = name;
        this.gameId = gameId;
    }
}

// Server class
class Server {
    constructor(id, maxMatchCount) {
        this.id = id;
        this.maxMatchCount = maxMatchCount;
        this.players = new Map();
        this.games = new Map();
        this.queries = new Map(); // playerId -> gameId
    }

    addPlayer(player) {
        this.players.set(player.id, player);
    }

    addGame(game) {
        this.games.set(game.gameId, game);
    }

    addQuery(playerId, gameId) {
        if (this.players.has(playerId) && this.games.has(gameId)) {
            this.queries.set(playerId, gameId);
        } else {
            console.log("Invalid player or game ID");
        }
    }

    getPlayers() {
        return Array.from(this.players.values());
    }

    getGames() {
        return Array.from(this.games.values());
    }
}

// Initialize server with Express
const app = express();
const PORT = 3000;

app.use(express.json());

let server = new Server(101, 10);

// Add initial players
server.addPlayer(new Player("David", 10001, 101));
server.addPlayer(new Player("Alice", 10002, 101));
server.addPlayer(new Player("Bob", 10003, 101));

// Add initial games
server.addGame(new Game("Tic Tac Toe", 1001));
server.addGame(new Game("Chess", 1002));
server.addGame(new Game("Checkers", 1003));

// Add initial queries
server.addQuery(10001, 1001);
server.addQuery(10002, 1002);

// API endpoints
app.get("/players", (req, res) => {
    res.json(server.getPlayers());
});

app.get("/games", (req, res) => {
    res.json(server.getGames());
});

app.post("/query", (req, res) => {
    const { playerId, gameId } = req.body;
    if (!playerId || !gameId) {
        return res.status(400).json({ message: "playerId and gameId are required" });
    }
    server.addQuery(playerId, gameId);
    res.json({ message: "Query added successfully" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

console.log("Server setup completed.");