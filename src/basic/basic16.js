/* 
	Реализуйте функцию reverse_list(arr), которая переворачивает порядок элементов массива. 
    Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function reverse_list(arr) {
    let narr = new Array(),
    j=arr.length-1;
    for(let i=0;i < arr.length; i++){
            narr[j]=arr[i];
            j--
        }
    return narr;
}

