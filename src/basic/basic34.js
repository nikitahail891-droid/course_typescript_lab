/* 
	Напишите функцию isSymmetric(matrix), проверяющую, симметрична ли матрица относительно главной диагонали. 
    Подсказка: главная диагональ матрицы  — это диагональ, проходящая по элементам матрицы, 
    у которых номер строки и номер столбца одинаковы.
*/

export function isSymmetric(matrix) {
  if (!matrix || matrix.length === 0) return true;

  const rows = matrix.length;
  
  for (let i = 0; i < rows; i++) {
    if (!Array.isArray(matrix[i]) || matrix[i].length !== rows) {
      return false;
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = i + 1; j < rows; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false;
      }
    }
  }
  return true;
}
