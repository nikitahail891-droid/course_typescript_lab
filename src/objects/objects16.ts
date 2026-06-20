/* 
	Реализовать функцию addToCollection<T, K extends string>(obj: Record<K, T[]>, collectionName: K, element: T): Record<K, T[]>, 
    которая добавляет элемент в существующую коллекцию в объекте.
*/

export function addToCollection<T, K extends string>(
    obj: Record<K, T[]>,
    collectionName: K,
    element: T
): Record<K, T[]> {
    let newObj: Record<K, T[]> = {} as Record<K, T[]>;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key as K] = obj[key];
        }
    }
    let oldArray = obj[collectionName]; 
    let newArray = oldArray.concat(element); 
    newObj[collectionName] = newArray;
    return newObj;
}

