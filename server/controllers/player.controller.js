import { players } from "../data/initialData.js"



const showAllplayer = (_, res) => {
    res.json(players)
}

const createPlayer = (req, res) => {
    const {username, } = req.body;
}


const updatepassword = (req, res) => {

}

const deletePlayer = (req, res) => {

}


const getHistory = (_, res) => {

}


const updateLevel = (req, res) => {
    const {playerId} = req.params;
    const {increasingLevel} = req.body;
    const player = players.find((p) => p.id == playerId);
    if(!player){
        return res.status(400).json({error: "Invalid player id"})
    }
    // res.status(200).json(player)

    const currentLevel = player.updateLevel(increasingLevel)
    return res.status(200).json({message: `${playerId} current level is ${currentLevel}`}) 

}

const login = (req, res) => {
    const {password} = req.body;
    const {playerId} = req.params;


    const player = players.find((p) => p.id == playerId);
    if(!player){
        return res.status(400).json({error: "Invalid player id"})
    }
    if (!player.matchPassword(password)){
        return res.status(400).json({ error: "Invalid credential"})
    }
    player.login()
    return res.status(200).json({messages: `${playerId } Login successfully.`})

}

const getPlayerInformation = (req, res) => {
    const {playerId} = req.params;
    const player = players.find((p) => p.id == playerId);
    if(!player){
        return res.status(400).json({error: "Invalid player id"})
    }
    return res.status(200).json(player)
    
}



export {
    showAllplayer,
    createPlayer,
    updatepassword,
    deletePlayer,
    getHistory,
    updateLevel,
    login,
    getPlayerInformation
}