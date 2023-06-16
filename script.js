//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get species(){
		return this.species;
	}
	makeSound(){
		onsole.log(`The ${this.species} makes a sound`);
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
Dog.bark();
window.Cat = Cat;
