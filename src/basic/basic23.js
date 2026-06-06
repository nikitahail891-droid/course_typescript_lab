/* 
	Напишите функцию strip_special_chars(text), которая удаляет из текста все специальные символы и оставляет только буквы и пробелы.
	Подсказка: для проверки символа можно использовать константу 
	const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
*/

export function strip_special_chars(text) {
	 const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (allowed.includes(ch)) {
            result += ch;
        }
    }

    return result;
}
