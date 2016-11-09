var cols = 5,
    rows = 5,
    hitCounter = 0,
    triesCounter = 0,
    tries = document.querySelector('.battleship__tries'),
    hits = document.querySelector('.battleship__hits'),
    container = document.querySelector('.battleship-container'),
    board = document.querySelector('.battleship'),
    menu = document.querySelector('.battleship-menu');

var matrix = (function () {
    var i, col,
        row,
        baseMatrix = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (i = 0; i < 3; i += 1) {
        col = getRandomInt(0, 4);
        row = getRandomInt(0, 4);
        baseMatrix[col][row] = 1;
    }

    return baseMatrix;
} ());

var board = (function (cols, rows) {
    var i,
        j,
        square,
        container = document.createElement('div');


    container.classList.add('battleship');

    for (i = 0; i < cols; i += 1) {
        for (j = 0; j < rows; j += 1) {
            square = document.createElement('div');
            square.classList.add('battleship__item');
            square.id = 'js-s' + i + j;
            container.appendChild(square);
        }
    }

    return container;
} (cols, rows));


container.appendChild(board);

function fireTorpedo(e) {
    var row, col,
        menuStart = document.querySelector('.battleship-menu__start'),
        menuEnd = document.querySelector('.battleship-menu__end'),
        newGameButton = document.querySelector('.battleship__new-game');
    if (e.target !== e.currentTarget) {
        row = e.target.id.substring(4, 5);
        col = e.target.id.substring(5, 6);
        if (matrix[row][col] === 0) {
            e.target.classList.add('battleship__item--missed');
            triesCounter += 1;
            tries.innerHTML = triesCounter;
            matrix[row][col] = 3;
        } else if (matrix[row][col] === 1) {
            e.target.classList.add('battleship__item--danger');
            matrix[row][col] = 2;
            hitCounter += 1;
            hits.innerHTML = hitCounter;
            if (hitCounter === 3) {
                menu.classList.remove('battleship--hidden');
                board.classList.add('battleship--hidden');
            }
        } else if (matrix[row][col] > 1 && matrix[row][col] !== 2) {
            e.target.classList.remove('battleship__item--missed');
            e.target.classList.add('battleship__item--success');
        }
    }
    e.stopPropagation();
}

container.appendChild(board);
board.addEventListener('click', fireTorpedo);

container.addEventListener('click', function () {
    // board.style.visibility = 'visible';
});
