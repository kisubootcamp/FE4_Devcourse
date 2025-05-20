{
  //1. 자동차 객체 만들기
  // 자동차 객체를 생성하는 Car 생성자 함수를 만드세요. 자동차는 make, model, year 속성을 가지며, drive 메서드를 통해 자동차의 모델과 제조사를 출력합니다.

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function () {
      return `${this.model} is made by ${this.make}in ${this.year}`;
    };
  }
  const car = new Car("hyundai", "genesis", "2024");
  console.log(car.drive());
}

{
  //2.학생 객체 만들기
  //학생 객체를 생성하는 Student 생성자 함수를 만드세요. 학생은 name, grade 속성을 가지며, getInfo 메서드를 통해 학생 정보를 출력합니다.

  function Student(name, grade) {
    this.name = name;
    this.grade = grade;
    this.getInfo = function () {
      return `${this.name} 는 ${this.grade}이다.`;
    };
  }
  const student1 = new Student("kuku", "4학년");
  console.log(student1.getInfo());
}

{
  //3. 동물객체만들기
  //Animal 생성자 함수를 만들어서, 동물의 이름과 종류를 속성으로 갖고, speak 메서드를 통해 소리를 내는 기능을 추가하세요.
  function Animal(name, speice) {
    this.name = name;
    this.speice = speice;
    this.speak = function () {
      return `${this.name}은 "멍멍"이라고 소리내어 운다.`;
    };
  }
  const dog = new Animal("ddaegu", "dog");
  console.log(dog.speak()); //ddaegu은 "멍멍"이라고 소리내어 운다.
}

{
  //4. 도서 객체 만들기
  //Book 생성자 함수를 만들어서, 책의 제목, 저자, 출판 연도를 속성으로 갖고, getSummary 메서드를 통해 책의 요약 정보를 출력하세요.
  function Book(title, writer, year) {
    this.title = title;
    this.writer = writer;
    this.year = year;
    this.getSummary = function () {
      return ` 이 책, ${this.name}은 저자 ${this.writer} 작가가 썼으며 발행년도는 ${this.year}이다.`;
    };
  }
  const book1 = new Book("희랍어시간", "한강", "2011");
  console.log(book1.getSummary()); // 이 책, undefined은 저자 한강 작가가 썼으며 발행년도는 2011이다.
}
{
  //5. 은행계좌객체만들기
  //BankAccount 생성자 함수를 만들어서, 계좌의 초기 잔고를 설정하고, deposit, withdraw, getBalance 메서드를 구현하세요.
  function BankAccount(initialBalance) {
    this.balance = initialBalance;
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
  const account1 = new BankAccount(0);
  account1.deposit(5000);
  account1.withdraw(2000);
  console.log(account1.getBalance());
}
{
  //6. 사각형 객체 만들기
  //
}
