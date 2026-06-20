/* 
	Допишите функцию, которая выполняет массив функций и возвращает массив результатов, обрабатывая ошибки отдельных функций.
*/

export function executeFunctionsSafely(functions: (() => any)[]): { result?: any; error?: string }[] {
  const results: { result?: any; error?: string }[] = [];
   for (const fn of functions) {
    try {
      results.push({ result: fn() });
    } catch (e) {
      results.push({ error: e instanceof Error ? e.message : String(e) });
    }
  }
  return results;
  // Ваш код здесь (5-7 строк)
  // Выполнить каждую функцию, поймать ошибки
  // Для успешных результатов: { result: значение }
  // Для ошибок: { error: сообщение_ошибки }
  return results;
}
