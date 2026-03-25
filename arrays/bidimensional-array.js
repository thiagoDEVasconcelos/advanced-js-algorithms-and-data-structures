const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const matrix = [arr1, arr2];
console.log(matrix);

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j]);
        }
    }
}

printMatrix(matrix);

//console.table(matrix)