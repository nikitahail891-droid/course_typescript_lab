/* 
	Реализовать функцию removeField<T, K extends keyof T>(obj: T, field: K): Omit<T, K>, которая удаляет поле из объекта.
*/

export function removeField<T, K extends keyof T>(obj: T, field: K): Omit<T, K> {
    let newObj = {} as any;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key !== field) {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}
