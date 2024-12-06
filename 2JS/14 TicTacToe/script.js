import { createInterface } from "readline";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readLineAsync = (promptText) => {
    return new Promise((resolve) => {
        readline.question(promptText, (userRes) => {
            resolve(userRes);
        });
    });
};

function printField(field) {
    console.log('\n   1   2   3  ')
    console.log('  -------------');
    for (let row = 0; row < 3; row++) {
        console.log(`${row + 1} | ${field[row][0]} | ${field[row][1]} | ${field[row][2]} |`);
        console.log('  -------------')
    }
    console.log();
}

function checkWin(field, symbol) {
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === symbol && field[i][1] === symbol && field[i][2] === symbol) {
            return true
        }
    }
    
    for (let i = 0; i < 3; i++) {
        if (field[0][i] === symbol && field[1][i] === symbol && field[2][i] === symbol) {
            return true
        }
    }
    
    if (field[0][0] === symbol && field[1][1] === symbol && field[2][2] === symbol) {
        return true
    }
    if (field[0][2] === symbol && field[1][1] === symbol && field[2][0] === symbol) {
        return true
    }
    
    return false
}

function checkDraw(field) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (field[row][col] === " ") {
                return false
            }
        }
    }
    return true;
}

let field = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

let exit = false
while (!exit) {
    printField(field)
    console.log("Player 1 (X):")
    let player1_r = parseInt(await readLineAsync("Row: ")) - 1
    let player1_c = parseInt(await readLineAsync("Column: ")) - 1
    
    while (isNaN(player1_r) || player1_r < 0 || player1_r > 2 || 
           isNaN(player1_c) || player1_c < 0 || player1_c > 2 ||
           field[player1_r][player1_c] !== " ") {
        if (isNaN(player1_r) || player1_r < 0 || player1_r > 2) {
            console.log("Please enter a valid row number (1-3)")
        }
        else if (isNaN(player1_c) || player1_c < 0 || player1_c > 2) {
            console.log("Please enter a valid column number (1-3)")
        }
        else {
            console.log("This position is already taken. Try again.")
        }
        
        player1_r = parseInt(await readLineAsync("Row: ")) - 1
        player1_c = parseInt(await readLineAsync("Column: ")) - 1
    }
    field[player1_r][player1_c] = "X"

    if (checkWin(field, "X")) {
        printField(field)
        console.log("Player 1 wins!")
        exit = true
        break
    }

    if (checkDraw(field)) {
        printField(field)
        console.log("It's a draw!")
        exit = true
        break
    }

    printField(field);
    console.log("Player 2 (O):");
    let player2_r = parseInt(await readLineAsync("Row: ")) - 1
    let player2_c = parseInt(await readLineAsync("Column: ")) - 1
    
    while (isNaN(player2_r) || player2_r < 0 || player2_r > 2 || 
           isNaN(player2_c) || player2_c < 0 || player2_c > 2 ||
           field[player2_r][player2_c] !== " ") {
        if (isNaN(player2_r) || player2_r < 0 || player2_r > 2) {
            console.log("Please enter a valid row number (1-3)")
        }
        else if (isNaN(player2_c) || player2_c < 0 || player2_c > 2) {
            console.log("Please enter a valid column number (1-3)")
        }
        else {
            console.log("This position is already taken. Try again.")
        }
        
        player2_r = parseInt(await readLineAsync("Row: ")) - 1
        player2_c = parseInt(await readLineAsync("Column: ")) - 1
    }
    field[player2_r][player2_c] = "O"

    if (checkWin(field, "O")) {
        printField(field)
        console.log("Player 2 wins!")
        exit = true
        break
    }

    if (checkDraw(field)) {
        printField(field)
        console.log("It's a draw!")
        exit = true
        break
    }
}

readline.close()