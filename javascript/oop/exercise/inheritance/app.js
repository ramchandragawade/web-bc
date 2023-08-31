// class Cat {
// 	constructor(name,age){
// 		this.name = name;
// 		this.age = age;
// 	}
// 	eat (){
// 		return `${this.name} is eating!`;
// 	}
// 	meow () {
// 		return 'MEOOOWWW!'
// 	}
// }

// const c1 = new Cat('Liv',2);

// class Dog {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	eat() {
// 		return `${this.name} is eating!`;
// 	}
// 	bark() {
// 		return 'WoOOFFFF!'
// 	}

// }

// const c2 = new Dog('Tom', 2);

class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

class Cat extends Pet{
	constructor (name, age, livesLeft=9){
		super(name,age);
		this.livesLeft = livesLeft;
	}
	meow () {
		return 'MEOOOWWW!'
	}
}

const c1 = new Cat('Liv',2);
console.log(c1);
class Dog extends Pet{
	eat() {
		return `${this.name} dog is eating`
	}
	bark() {
		return 'WoOOFFFF!'
	}
}

const c2 = new Dog('Tom', 2);
console.log(c2);
