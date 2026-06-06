/* 
	Реализуйте функцию even_elements(arr), которая возвращает новый список, содержащий только четные элементы исходного списка. 
    Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function even_elements(arr) {
    let narr = new Array(),
    j=0;
    for(let i=0;i < arr.length; i++){
        let nchet=arr[i]
        if (nchet%2==0) {
            narr[j]=nchet;
            j++
        }
    }
    return narr;
}
