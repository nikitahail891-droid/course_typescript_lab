/* 
	Реализуйте функцию is_prime(n), которая проверяет, является ли число n простым. 
	Простое число — это натуральное число больше единицы, которое делится только на 1 и само себя.
	 Функция должна использовать цикл while.
*/

export function is_prime(n) {
	if (n===2) return true;
	if ((n<=1)||(n%2===0))return false;
	let nechet = 3;
	while(nechet < n){
		if (n % nechet === 0) return false;
		nechet += 2;
	}
	return true;
}


