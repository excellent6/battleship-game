(function () {
    var i, j, square,
        cols = 5,
        rows = 5,
        fragment = document.createDocumentFragment(),
        gameBoardContainer = document.getElementById('gameboard'),
        gameBoard = [
            [0, 0, 0, 1, 1,],
            [0, 0, 0, 0, 0,],
            [0, 0, 0, 0, 0,],
            [0, 0, 0, 0, 0,],
            [0, 0, 0, 0, 0,],
            [1, 0, 0, 0, 0,]
        ];

    for (i = 0; i < cols; i += 1) {
        for (j = 0; j < rows; j += 1) {
            square = document.createElement('div');
            square.innerHTML = i + ' ' + j;
            square.id = 's' + j + i;
            fragment.appendChild(square);
        }
    }

    gameBoardContainer.appendChild(fragment);
} ());