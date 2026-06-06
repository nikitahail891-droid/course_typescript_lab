/* 
	Напишите функцию swap_first_last(arr), меняющую местами первый и последний элемент массива. 
    Функция не должна использовать функции высших порядков и оператор ..., также она не должна изменять исходный массив,
     можно использовать циклы while или for.
*/

export function swap_first_last(arr) {
    let narr = new Array();
    for(let i=0;i < arr.length; i++){
        if (i==0) narr[arr.length-1]=arr[i];
        if (i==arr.length-1) 
            narr[0]=arr[i];
        else narr[i]=arr[i];
    }
    return narr;
}
