/* 
	Реализовать функцию fibonacci(n), которая возвращает n-е число последовательности Фибоначчи. 
  Последовательность начинается с 0 и 1, каждое следующее число — сумма двух предыдущих. 
  Функция должна использовать цикл while.
*/

export function fibonacci(n) {
  if (n === 0) return 0;
    
  let old = 0;
  let fib = 1;
  
  while (n > 1) {
    fib = old + fib;
    old = fib - old;
    n--;
  }
  
  return fib;
}

