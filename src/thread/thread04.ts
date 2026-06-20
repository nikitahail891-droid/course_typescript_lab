/* 
	Допишите функцию асинхронного запроса, чтобы она обрабатывала ошибки и возвращала fallback-значение.
*/

export async function fetchWithFallback(url: string): Promise<string> {
  // Ваш код здесь (4-5 строк)
    try {
    const response = await fetch(url);
    return await response.text();
  } catch {
    return "Error: fallback data";
  }
}


