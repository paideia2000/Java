const getNumberUser = (position) => {
    
    while(true){

        const number = prompt("Enter the position between (0-8)")

        if (/^[0-9]$/.test(number) && position.includes(parseInt(number))){
            
            return parseInt(number);

        }else{
            alert("ERROR: You need insert a available number. Try again.")
            continue;
        }

    }
}

const getNumberPc = (position) => {

    while(true){

        const pseudoNumber = Math.floor(Math.random() * ( (8 - 0 + 1) + 0))

        if (position.includes(pseudoNumber)){

            return pseudoNumber;
        
        }else{

            continue
        }
    }
}


const evaluateWin = (board) => {

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] === "X" && board[b] === "X" && board[c] === "X") {
            alert("You win!");
            return false;
        } else if (board[a] === "_" && board[b] === "_" && board[c] === "_") {
            alert("PC wins!");
            return false;
        }
    }
    if (!board.includes(0) && !board.includes(1) && !board.includes(2) && 
        !board.includes(3) && !board.includes(4) && !board.includes(5) && 
        !board.includes(6) && !board.includes(7) && !board.includes(8)) {
        alert("It's a draw!");
        return false;
    }
    return true;

}


const table = () => {


    let board = [0,1,2,3,4,5,6,7,8]

    let positionAvailable = [0,1,2,3,4,5,6,7,8]

    alert("Welcome to the game of Tic Tac Toe!")
    alert("You are 'X' and the PC is '_'")
    
    while(true){

        const positionNumberUser = getNumberUser(positionAvailable );
        alert("You have selected the position: " + positionNumberUser)
        const positionNumberPc = getNumberPc(positionAvailable );
        alert("PC has selected the position: " + positionNumberPc)

        condition = evaluateWin(board)
        if(condition){

            board[positionNumberUser] = "X"
            board[positionNumberPc] = "_"

            positionAvailable[positionNumberUser] = null
            positionAvailable[positionNumberPc] = null
            
            
            alert("Check The positions:"
                +"\n| " + board[0] + "| " + board[1] + "| " + board[2] + "|" 
                +"\n| " + board[3] + "| " + board[4] + "| " + board[5] + "|" 
                +"\n| " + board[6] + "| " + board[7] + "| " + board[8] + "|" 
            )

        }else{
            break;
        }
        
    }
}


table()





