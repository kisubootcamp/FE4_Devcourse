// 1. 자동차 객체 만들기
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    return `${this.make}, ${this.model}, ${this.year}`;
  };
}

const car = new Car('make', 'model', 'year');
console.log(car.drive()); // make, model, year

// 2. 학생 객체 만들기
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = function () {
    return `${this.name}, ${this.grade}`;
  };
}

const stu = new Student('sy', '4');
console.log(stu.getInfo()); // sy, 4

// 3. 동물 객체 만들기
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.speak = function () {
    return `${this.name}: 멍멍`;
  };
}

const ani = new Animal('강', '강아지');
console.log(ani.speak()); // 강: 멍멍

// 4. 도서 객체 만들기
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title}, ${this.author}, ${this.year}`;
  };
}

const book1 = new Book('제목제목', '저자저자', 2025);
console.log(book1.getSummary());

// 5. 은행 계좌 객체 만들기
function BankAccount(initial) {
  this.balance = initial;
  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = function (amount) {
    this.balance -= amount;
  };
  this.getBalance = function () {
    return this.balance;
  };
}
const bank = new BankAccount(0);
bank.deposit(100000);
bank.withdraw(20000);
console.log(bank.getBalance()); // 80000

// 6. 사각형 객체 만들기
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
  this.perimeter = function () {
    return 2 * (this.width + this.height);
  };
}

const rect1 = new Rectangle(10, 5);
console.log(rect1.area()); // 50
console.log(rect1.perimeter()); // 30

// 7. 비행기 객체 만들기
function Airplane(model, capacity) {
  this.model = model;
  this.capacity = capacity;
  this.fly = function () {
    return `${this.model}, ${this.capacity}`;
  };
}

const air = new Airplane('대한항공', 400);
console.log(air.fly()); // 대한항공, 400

// 8. 팀 객체 만들기
function Team(name, members) {
  this.name = name;
  this.members = members;
  this.addMember = function (memberName) {
    this.members.push(memberName);
  };
}

const lol = new Team('team', []);
lol.addMember('team1');
lol.addMember('team2');
lol.addMember('team3');
console.log(lol.members); // [ 'team1', 'team2', 'team3' ]

// 9. 영화 객체 만들기
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetails = function () {
    return `${this.title}, ${this.director}, ${this.year}`;
  };
}

const movie = new Movie('야당', '감독?', 2025);
console.log(movie.getDetails()); // 야당, 감독?, 2025

// 10. 시간 객체 만들기
function Time(hour, minute, second) {
  this.hour = hour;
  this.minute = minute;
  this.second = second;
  this.getTime = function () {
    return `${this.hour}:${this.minute}:${this.second}`;
  };
}
const time = new Time(21, 40, 30);
console.log(time.getTime()); // 21:40:30
