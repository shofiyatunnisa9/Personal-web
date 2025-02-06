class Animal {
  brain = true;
  legs = 0;
  name = "unknown name";

  sleep() {
    console.log(`${this.name} is sleeping`);
    console.log(`${this.legs} has ${this.legs} legs`);
  }
}

class Human extends Animal {
  name = "sho"; //menimpa properti yang ada di animal, diganti
  legs = 2;
  eyeCount = 2;
}
class Pet extends Animal {
  legs = 4;
  fleas = 0;
}

class Cat extends Pet {
  fleas = 5;
}

const sho = new Human();
sho.sleep();

const kitty = new Cat();
console.log(kitty.brain);
