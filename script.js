const boardElement = document.getElementById('sudoku-board');
const newGameButton = document.getElementById('new-game');
const solveButton = document.getElementById('solve');

let board = [];
let solution = [];

function generatePuzzle() {
    // A pre-generated solved Sudoku puzzle
    const solvedBoard = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    solution = JSON.parse(JSON.stringify(solvedBoard)); // Deep copy

    // Remove some numbers to create the puzzle
    board = JSON.parse(JSON.stringify(solvedBoard));
    for (let i = 0; i < 40; i++) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        board[row][col] = 0;
    }

    drawBoard();
}

function drawBoard() {
    boardElement.innerHTML = '';
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (board[r][c] !== 0) {
                cell.textContent = board[r][c];
                cell.classList.add('fixed');
            } else {
                const input = document.createElement('input');
                input.setAttribute('type', 'number');
                input.setAttribute('min', '1');
                input.setAttribute('max', '9');
                cell.appendChild(input);
            }
            boardElement.appendChild(cell);
        }
    }
}

function solve() {
    board = JSON.parse(JSON.stringify(solution));
    drawBoard();
}

newGameButton.addEventListener('click', generatePuzzle);
solveButton.addEventListener('click', solve);

// Generate a puzzle when the page loads
generatePuzzle();
