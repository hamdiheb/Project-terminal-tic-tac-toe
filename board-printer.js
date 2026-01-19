/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];

export function printBoard(board) {
    for(let i=0;i<board.length;i++){
        let element = board[i];
        let bo = '';
        for(let j=0;j<element.length;j++){
            if(element[j] === '_'){
                bo+=' ' +' | '
            }else{
            bo+=element[j]+' | ';
            }
        }
        console.log(bo);
        let des='';
        for(let g=0;g<bo.length;g++){
            des+='=';
        }
        console.log(des);
    }        
}


/*for(const element in board){
        console.log(element.length)
    }
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
    let more = false;
    for(let i=0;i<board.length;i++){
        // if(board[i].includes('_')){
        //     return true;
        // }else{
        //     return false;
        // }
        return board[i].includes("_") ? true : false;
    }
}

console.log(checkIfNoMovesLeft(board));