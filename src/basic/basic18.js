/* 
	Напишите функцию second_largest(arr), находящую второе максимальное значение в массиве. 
  Если такого элемента нет - вернуть null. Функцию сортировки использовать нельзя, можно использовать циклы while или for.
*/

export function second_largest(arr) {
  let max = arr[0];
    for(let i=0;i < arr.length; i++)
        if (max < arr[i]) max = arr[i];

  return null;
}

