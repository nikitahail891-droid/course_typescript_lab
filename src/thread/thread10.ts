/* 
	Реализовать функцию XXX
*/

export class NestedValidationError extends Error {
  constructor(message: string, public path: string[]) {
    super(message);
    this.name = 'NestedValidationError';
  }
}

export interface Address {
  street: string;
  city: string;
}

export interface Person {
  name: string;
  age: number;
  address: Address;
}

export function validatePerson(person: Person): void {
   if (!person.name || person.name.trim() === '') {
    throw new NestedValidationError('Name is required', ['name']);
  }
  if (person.age < 0) {
    throw new NestedValidationError('Age must be non-negative', ['age']);
  }
  if (!person.address) {
    throw new NestedValidationError('Address is required', ['address']);
  }
  if (!person.address.street || person.address.street.trim() === '') {
    throw new NestedValidationError('Street is required', ['address', 'street']);
  }
  if (!person.address.city || person.address.city.trim() === '') {
    throw new NestedValidationError('City is required', ['address', 'city']);
  }
  // Ваш код здесь (10-12 строк)
  // Проверить name (не пустой)
  // Проверить age (>= 0)
  // Проверить address.street (не пустой)
  // Проверить address.city (не пустой)
  // Для ошибок указать путь в path
}
