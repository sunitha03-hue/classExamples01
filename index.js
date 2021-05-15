//Try adding new properties inside constructor.
class Astronaut {
    constructor(name, age, mass){
      this.name = name;
      this.age = age;
      this.mass = mass;
    }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.
class Astronaut1 {
   constructor(name, age, mass=90){
      this.name = name;
      this.age = age;
      this.mass = mass;
   }
}

let tortoise = new Astronaut1('Speedy', 120);

console.log(tortoise.name, tortoise.age, tortoise.mass);