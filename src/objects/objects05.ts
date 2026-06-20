/* 
	В объекте user создать метод copy, который будет возвращать глубокую копию объекта. 
  При передачи аргументов метод должен возвращать копию объекта с новыми значениями свойств. 
*/

export type User = {
  name: string;
  age: number;
  role: string[];
  copy: (name?: string, age?: number, role?: string[]) => User
};

export const user: User = {
  name: "John",
  age: 30,
  role: ["admin", "user"],
  copy(name?: string, age?: number, role?: string[]): User {
    let newUser = JSON.parse(JSON.stringify(this)) as User;
    newUser.copy = this.copy;
    if (name !== undefined) newUser.name = name;
    if (age !== undefined) newUser.age = age;
    if (role !== undefined) newUser.role = role;
    return newUser;

  },
};
