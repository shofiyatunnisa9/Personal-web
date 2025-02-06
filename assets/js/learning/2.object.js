// PascalCase (huruf besar diawal )
class Dog {
  constructor(
    // PROPERTIES
    name = "",
    color = "",
    eyecolor = "",
    height = 0,
    lenght = 0,
    weight = 0
  ) {
    this.name = name;
    this.color = color;
    this.eyecolor = eyecolor;
  }

  //   METHOD
  sit() {
    console.log(`${this.name} is sitting`);
  }

  layDown() {
    console.log("Dog is Laying Down");
  }
}

let bobby = new Dog("Bobby", "white", "red");
console.log(bobby.name);
console.log(bobby.color);
console.log(bobby.eyecolor);

bobby.sit();
