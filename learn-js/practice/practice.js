//1

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const john = new Person("John");
john.greet();
console.log(john.greet());

//2

function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function () {
  return "The car has started.";
};

const myCar = new Car("Toyota");
console.log(myCar.start());

//03
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return `${this.width}` * `${this.height}`;
};

const rect = new Rectangle(5, 10);
console.log(rect.area());

//04

function Animal() {}

Animal.prototype.speak = function () {
  return "Animal makes a sound";
};

const animal = new Animal();
animal.speak();
console.log(animal.speak());

//05
function Student(name2) {
  this.name2 = name2;
}

Student.prototype.introduce = function () {
  return `Hi, I'm ${this.name2} and I'm a student`;
};

const student = new Student("Alice");
student.introduce();
console.log(student.introduce());
