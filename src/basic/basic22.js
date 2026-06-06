/* 
	Реализуйте функцию palindrome_check(word), которая проверяет, является ли слово палиндромом 
	(читается одинаково слева направо и справа налево).
	Подсказка: используйте методы split и join для строк и метод reverse для массивов.
*/

export function palindrome_check(word) {
	let arr = word.split(''),
	j=arr.length-1,
	arrbuf=[];
	if (arr.length<2) return true;
	for (let i = 0; i < arr.length; i++) {
			arrbuf[i]=arr[j];
			j--;
		}
		return arr.join('')===arrbuf.join('');
	 
}
