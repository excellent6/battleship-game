(function () {
    var cols = 5,
        rows = 5,
        counter = 0,
        container = document.getElementsByClassName('battleship')[0],
        matrix = [
            [0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0]
        ];


    function createBoard(cols, rows) {
        var i,
            j,
            square,
            fragment = document.createDocumentFragment();

        for (i = 0; i < cols; i += 1) {
            for (j = 0; j < rows; j += 1) {
                square = document.createElement('div');
                square.classList.add('battleship__item');
                square.id = 'js-s' + i + j;
                fragment.appendChild(square);
            }
        }

        container.appendChild(fragment);
    }


    function fireTorpedo(e) {
        var row, col;
        if (e.target !== e.currentTarget) {
            row = e.target.id.substring(4, 5);
            col = e.target.id.substring(5, 6);
            console.log(col, row);
            if (matrix[row][col] === 0) {
                 e.target.classList.add('battleship__item--missed');
                matrix[row][col] = 3;
            } else if (matrix[row][col] == 1) {
                e.target.classList.add('battleship__item--danger');
                matrix[row][col] = 2;
                counter += 1;
                if (counter === 3) {
                    alert("All enemy battleships have been defeated! You win!");
                }
            } else if (matrix[row][col] > 1 && matrix[row][col] !== 2) {
                e.target.classList.add('battleship__item--success');
            }
        }
        e.stopPropagation();
    }

    createBoard(cols, rows);
    container.addEventListener('click', fireTorpedo);

} ());
