/* 
	Реализуйте функцию removeFirstOccurrence(arr, value), которая удаляет первое вхождение указанного элемента из массива
*/

export function removeFirstOccurrence (arr, value) {
   let found = false;
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!found && arr[i] === value) {
            found = true;
            continue;
        }
        newarr.push(arr[i]);
    }
    return newarr;
  }
