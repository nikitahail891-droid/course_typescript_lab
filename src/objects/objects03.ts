/* 
	В объекте user создать метод copy, который будет возвращать глубокую копию объекта.
   При передачи аргументов метод должен возвращать копию объекта с новыми значениями свойств. 
*/


export type Address = {
  street: string;
  building: number;
}

export type User = {
  name: string;
  age: number;
  address: Address;
  copy: (name?: string, age?: number, address?: Address) => User
};

export const user: User = {
  name: "John",
  age: 30,
  address: { street: "Main Street", building: 123 },
  copy(name?: string, age?: number, address?: Address) {
    const newUser = JSON.parse(JSON.stringify(this)) as User;
    newUser.copy = this.copy;
    
    if (name !== undefined) newUser.name = name;
    if (age !== undefined) newUser.age = age;
    if (address !== undefined) newUser.address = address;
    
    return newUser;
  },
};
