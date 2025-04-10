{
  //1.  Person 타입 작성
  //사람을 나타내는 Person 타입을 정의하세요. 이 타입은 name (문자열), age (숫자) 속성을 가집니다. 그리고 이를 사용하는 getPersonInfo 함수를 작성하여 Person 객체를 출력하세요.
  type Person = {
    name: string;
    age: number;
  };
  const person1: Person = {
    name: "kuku",
    age: 3,
  };
  function getPersonInfo(param1: Person): void {
    console.log(param1);
  }
  getPersonInfo(person1);
}

{
  //2.객체생성 TODO
  //   Config 타입을 정의하여 host (문자열), port (숫자), ssl (불린값)을 갖는 객체 타입입니다. createConfig 함수는 Config 타입을 반환하도록 하세요.
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };
  function createConfig(
    param1: Config["host"],
    param2: Config["port"],
    param3: Config["ssl"]
  ): Config {
    const makeConfig: Config = { host: param1, port: param2, ssl: param3 };

    return makeConfig;
  }
  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  // TODO;
  //3. Rectagle 타입 작성
  //Rectangle 타입을 정의하여 width (숫자)와 height (숫자) 속성을 가지게 하세요. calculateArea 함수를 작성하여 Rectangle 객체의 면적을 계산하세요.
  type Rectangle = {
    width: number;
    height: number;
  };
  function calculateArea(num1: Rectangle["width"], num2: Rectangle["height"]) {
    return num1 * num2;
  }

  console.log(calculateArea(5, 6)); // 가로 5, 세로 6인 사각형의 넓이. 30
}

{
  //4. Student 타입 작성
  //Student 타입을 정의하여 name (문자열), age (숫자), grades (숫자 배열) 속성을 포함하게 하세요. calculateAverageGrade 함수를 작성하여 평균 성적을 계산하세요.
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };
  const calculateAverageGrade = function (arr: Student["grades"]): number {
    const total = arr.reduce((acc, cur) => acc + cur, 0);
    return total / arr.length;
  };
}

{
  //5.Response 타입 작성
  //Response 타입을 작성하여 status (문자열), data (문자열), message (문자열) 속성을 포함하게 하세요. createResponse 함수를 작성하여 이 타입의 객체를 반환하세요.
  type Response = {
    status: string;
    data: string;
    message: string;
  };
  const createResponse: (
    param1: Response["status"],
    param2: Response["data"],
    param3: Response["message"]
  ) => Response = function (param1, param2, param3) {
    const makeResponse = { status: param1, data: param2, message: param3 };
    return makeResponse;
  };

  console.log(createResponse("success", "John", "fetch success")); // { status: 'success', data: 'John', message: 'fetch success'
}

{
  //6. Eployee 작성
  //Employee 타입을 작성하여 id (문자열), name (문자열), position (문자열) 속성을 가집니다. getEmployeeInfo 함수에서 이 정보를 반환하도록 하세요.
  type Eployee = {
    id: string;
    name: string;
    position: string;
  };
  const getEmployeeInfo = (obj: Eployee) => {
    return `${obj.name} works as a ${obj.position} developer with ID: ${obj.id}.`;
  };

  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // "james works as a developer with ID: 1."
}

{
  //7. Circle 타입작성
  // Circle 타입을 작성하여 radius (숫자) 속성을 가지게 하세요. calculateCircumference 함수에서 원의 둘레를 계산하는 기능을 작성하세요.
  type Circle = {
    radius: number;
  };
  const calculateCircumference = (obj: Circle) => Math.PI * 2 * obj.radius;
  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
  //8.Product 타입 작성
  //Product 타입을 작성하여 name (문자열), price (숫자), inStock (불린값) 속성을 가지게 하세요. getDiscountedPrice 함수에서 주어진 할인을 적용한 가격을 계산하세요.
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };
  const getDiscountedPrice = (obj: Product, discount: number) => {
    if (obj.inStock === true) {
      return obj.price * (1 - discount / 100);
    }
  };

  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}

{
  //9. Book 타입 작성
  //Book 타입을 작성하여 title (문자열), author (문자열), publishedYear (숫자) 속성을 포함하도록 하세요. getBookSummary 함수에서 책에 대한 간단한 요약을 반환하도록 하세요.
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };
  const getBookSummary = (obj: Book) => {
    return `${obj.title} by ${obj.author}, published in ${obj.publishedYear} `;
  };

  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  ); // "river by james, published in 2020."
}

{
  //10. Transaction 타입 작성
  //Transaction 타입을 작성하여 id (문자열), amount (숫자), timestamp (문자열) 속성을 가지게 하세요. isValidTransaction 함수에서 amount가 0보다 큰지 비교해서 결과를 반환하는 로직을 작성해주세요.(참/거짓 반환)
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };
  const isValidTransaction = (obj: Transaction) => {
    if (obj.amount > 0) return true;
    else return false;
  };
}
