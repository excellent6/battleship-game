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
                square.id = 's' + i + j;
                fragment.appendChild(square);
            }
        }

        container.appendChild(fragment);
    }


    function fireTorpedo(e) {
        var row, col;
        if (e.target !== e.currentTarget) {
            row = e.target.id.substring(1, 2);
            col = e.target.id.substring(2, 3);
            if (matrix[row][col] === 0) {
                e.target.style.background = '#bbb';
                matrix[row][col] = 3;
            } else if (matrix[row][col] == 1) {
                e.target.style.background = 'red';
                matrix[row][col] = 2;
                counter += 1;
                if (counter === 3) {
                    alert("All enemy battleships have been defeated! You win!");
                }
            } else if (matrix[row][col] > 1 && matrix[row][col] !== 2) {
                e.target.style.backgroundColor = 'yellowgreen';
            }
        }
        e.stopPropagation();
    }

    createBoard(cols, rows);
    container.addEventListener('click', fireTorpedo);

} ());
