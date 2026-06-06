/* 
	Реализуйте функцию splitAndMergeStrings(strArr), которая принимает массив строк, разбивает каждую строку пополам, 
  затем соединяет полученные части обратно в один массив. При разбиении строк нечетной длины первая часть должна быть длины 
  на 1 больше второй части. Строки из одно символа не должны разбиваться.
*/

export function splitAndMergeStrings(strArr) {
  const result = [];

  for (let i of strArr) {
    if (i.length <= 1) {
      result.push(i);
    } else {
      let splitIndex = Math.ceil(i.length / 2);
      result.push(i.slice(0, splitIndex), i.slice(splitIndex));
    }
  }

  return result;

}


