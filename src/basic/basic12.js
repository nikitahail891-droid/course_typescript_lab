/* 
	Напишите функцию find_max(arr), которая находит максимальное значение в списке чисел. 
    Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function find_max(arr) {
    let max = arr[0];
    for(let i=0;i < arr.length; i++)
        if (max < arr[i]) max = arr[i];

    return max;
}


