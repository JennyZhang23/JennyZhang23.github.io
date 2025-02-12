---
title: Tetris Game
output:
  html_document:
    self_contained: true
    css: styles.css
knit: (function(inputFile, encoding) {
  rmarkdown::render(inputFile, encoding = encoding, output_dir = "../_posts") })
date: 2024-05-01
permalink: /tetris
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tetris Game</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #000;
            color: white;
            font-family: 'Arial', sans-serif;
            margin: 0; /* Remove default margin */
        }
        canvas {
            border: 2px solid #fff;
            background-color: #111;
        }
        #game-over {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 36px;
            color: red;
        }
    </style>
</head>
<body>
    <canvas id="tetris" width="240" height="400"></canvas>
    <div id="game-over">Game Over</div>
    <script>
        const canvas = document.getElementById('tetris');
        const context = canvas.getContext('2d');
        const grid = 20;
        const rows = canvas.height / grid;
        const cols = canvas.width / grid;

        let board = Array.from({ length: rows }, () => Array(cols).fill(0));
        let currentPiece;
        let gameOver = false;

        const pieces = [
            [[1, 1, 1, 1]], // I
            [[1, 1], [1, 1]], // O
            [[0, 1, 1], [1, 1, 0]], // S
            [[1, 1, 0], [0, 1, 1]], // Z
            [[1, 0, 0], [1, 1, 1]], // L
            [[0, 0, 1], [1, 1, 1]], // J
            [[0, 1, 0], [1, 1, 1]]  // T
        ];

        function drawBoard() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            board.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value) {
                        context.fillStyle = 'white';
                        context.fillRect(x * grid, y * grid, grid - 1, grid - 1);
                    }
                });
            });
        }

        function drawPiece() {
            currentPiece.shape.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value) {
                        context.fillStyle = 'white';
                        context.fillRect((currentPiece.x + x) * grid, (currentPiece.y + y) * grid, grid - 1, grid - 1);
                    }
                });
            });
        }

        function collide() {
            return currentPiece.shape.some((row, y) =>
                row.some((value, x) => value && (board[currentPiece.y + y] && board[currentPiece.y + y][currentPiece.x + x]) !== 0)
            );
        }

        function merge() {
            currentPiece.shape.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value) {
                        board[currentPiece.y + y][currentPiece.x + x] = 1;
                    }
                });
            });
        }

        function rotatePiece() {
            const originalShape = currentPiece.shape;
            currentPiece.shape = currentPiece.shape[0].map((val, index) =>
                currentPiece.shape.map(row => row[index]).reverse()
            );
            if (collide()) {
                currentPiece.shape = originalShape; // revert if collision
            }
        }

        function resetGame() {
            board = Array.from({ length: rows }, () => Array(cols).fill(0));
            gameOver = false;
            document.getElementById('game-over').style.display = 'none';
            spawnPiece();
            drawBoard();
            drawPiece();
            update();
        }

        function spawnPiece() {
            const randomIndex = Math.floor(Math.random() * pieces.length);
            currentPiece = {
                shape: pieces[randomIndex],
                x: Math.floor(cols / 2) - 1,
                y: 0
            };
            if (collide()) {
                gameOver = true;
                document.getElementById('game-over').style.display = 'block';
            }
        }

        function removeFullLines() {
            board = board.reduce((acc, row) => {
                if (row.every(value => value !== 0)) {
                    acc.unshift(Array(cols).fill(0)); // Add a new empty row at the top
                } else {
                    acc.push(row); // Keep the current row
                }
                return acc;
            }, []);
        }

        function update() {
            if (gameOver) return;

            currentPiece.y++;
            if (collide()) {
                currentPiece.y--;
                merge();
                removeFullLines(); // Check for and remove full lines
                spawnPiece();
            }

            drawBoard();
            drawPiece();
            setTimeout(update, 1000);
        }

        document.addEventListener('keydown', (event) => {
            if (gameOver) return;
            if (event.key === 'ArrowLeft') {
                currentPiece.x--;
                if (collide()) currentPiece.x++;
            } else if (event.key === 'ArrowRight') {
                currentPiece.x++;
                if (collide()) currentPiece.x--;
            } else if (event.key === 'ArrowDown') {
                currentPiece.y++;
                if (collide()) {
                    currentPiece.y--;
                    merge();
                    removeFullLines(); // Check for and remove full lines
                    spawnPiece();
                }
            } else if (event.key === 'ArrowUp') {
                rotatePiece();
            }
            drawBoard();
            drawPiece();
        });

        resetGame();
    </script>
</body>
</html>