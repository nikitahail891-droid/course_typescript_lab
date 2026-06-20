/* 
	Создайте функцию, которая собирает объект из двух массивов: массива ключей и массива значений.
*/

export function fromArrays<T, K extends string>(keys: K[], values: T[]): Record<K, T> {
	const result = {} as Record<K, T>;
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i] as T;
    }

    return result;
}

