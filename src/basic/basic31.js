/* 
	Реализуйте функцию transposeMatrix(matrix), которая транспонирует матрицу (меняет строки и столбцы местами).
*/

export function transposeMatrix(matrix) {
	if (!matrix || matrix.length === 0) return [];
	let	rows = matrix.length,       
  	cols = matrix[0].length,   
  	newMatrix = Array.from({ length: cols }, () => new Array(rows).fill(0)); 

  	for (let i = 0; i < rows; i++) {
    	for (let j = 0; j < cols; j++) {
      	newMatrix[j][i] = matrix[i][j];
    	}
  	}
  return newMatrix;
}
