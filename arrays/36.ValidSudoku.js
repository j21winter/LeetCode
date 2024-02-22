const { set } = require("mongoose")

function isValidSudoko (board) {

    const rows = new Map()
    const cols = new Map()
    const squares = new Map()
    
    for(let i = 0; i < 9; i++){ // rows
        for(let j = 0; j < 9; j++){ // columns
            const cell = board[i][j] // number in question
            if(cell === '.'){
                continue
            }

            if (
                (rows.get(i) && rows.get(i).has(cell)) || // if it has a row with this key and if that value has a duplicate 
                (cols.get(j) && cols.get(j).has(cell)) ||// if it has a column with this key and if that value has a duplicate
                (squares.get(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`) && squares.get(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`).has(cell)) // if it has a sqaure with this key and if that value has a duplicate
            ) {
                return false;
            } else {
                rows.get(i) ? rows.get(i).add(cell) : rows.set(i, new Set([cell])); // if it has a set in place add to it. Else start a new set with the key,value
                cols.get(j) ? cols.get(j).add(cell) : cols.set(j, new Set([cell])); // if it has a set in place add to it. Else start a new set with the key,value
                squares.get(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`) ? squares.get(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`).add(cell) : squares.set(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`, new Set([cell])); // if it has a set in place add to it. Else start a new set with the key,value
            }
        } 


    }
    return true
}

const testBoard1 = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

const testBoard2 = [
    ["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
]

console.log(isValidSudoko(testBoard1))
console.log(isValidSudoko(testBoard2))