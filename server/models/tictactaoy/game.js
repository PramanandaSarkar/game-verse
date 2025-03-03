const Stone = {
    BLACK: "black stone",
    RED: "red stone",
    EMPTY: "no stone"
} 


class GameBoard{
    constructor(){
        this.board = [
            [Stone.EMPTY, Stone.EMPTY, Stone.EMPTY],
            [Stone.EMPTY, Stone.EMPTY, Stone.EMPTY],
            [Stone.EMPTY, Stone.EMPTY, Stone.EMPTY]
        ]
        this.print();
        this.currentTrun = Stone.BLACK;
        this.winner = null;
    }

    turn(rowIndex, colIndex){
        if (this.winner){
            console.log(`Game over! winner: `, this.winner);
            return;
        }
        if (this.board[rowIndex][colIndex] === Stone.EMPTY){
            this.board[rowIndex][colIndex] = this.currentTrun;
        }
        else{
            throw new Error("can't overwrite")
        }
        
        
        this.currentTrun = this.currentTrun === Stone.BLACK ? Stone.RED : Stone.BLACK;


    }
    checkResult() {
        
        const winnablePattern = [
            [[0, 0], [0, 1], [0, 2]], // Row 1
            [[1, 0], [1, 1], [1, 2]], // Row 2
            [[2, 0], [2, 1], [2, 2]], // Row 3
            [[0, 0], [1, 0], [2, 0]], // Col 1
            [[0, 1], [1, 1], [2, 1]], // Col 2
            [[0, 2], [1, 2], [2, 2]], // Col 3
            [[0, 0], [1, 1], [2, 2]], // Diagonal \ 
            [[0, 2], [1, 1], [2, 0]]  // Diagonal /
        ];

        for(const pattern of winnablePattern) {
            const [a,b,c] = pattern;
            if (
                this.board[a[0]][a[1]] !== Stone.EMPTY &&
                this.board[a[0]][a[1]] === this.board[b[0]][b[1]] &&
                this.board[a[0]][a[1]] === this.board[c[0]][c[1]]
            ) {
                this.winner = this.board[a[0]][a[1]];
                return true;
            }
        }
        if (this.board.flat().every(cell => cell !== Stone.EMPTY)) {
            this.winner = "Draw";
            return true;
        }
        return false;

    }





    print() {
        console.log("Current Board:");
        for (const row of this.board) {
            console.log(row.join(" | "));
        }
        console.log("Current Turn:", this.currentTurn);
    }
}


export {
    GameBoard
}