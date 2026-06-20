/* 	
	В объекте user создать метод equal, который будет проверять структурное равенство объектов. 
  При передачи аргументов метод должен возвращать копию объекта с новыми значениями свойств. 
*/

import { deepEqual } from "assert";

export type User = {
  name: string;
  age: number;
  role: string[];
  equal: (other: User) => boolean;
};

export const user: User = {
  name: "John",
  age: 30,
  role: ["admin", "user"],
  equal(other: User) {
    let newUser = JSON.parse(JSON.stringify(this)) as User;
    newUser.equal = this.equal;
    if (other.name !== undefined) newUser.name = other.name;
    if (other.age !== undefined) newUser.age = other.age;
    if (other.role !== undefined) newUser.role = other.role;
	return JSON.stringify(this) === JSON.stringify(other);
  },
};
