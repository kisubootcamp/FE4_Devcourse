{
  // 연습문제 1번
  // 함수 정의
  const add = (n1: number, n2: number): number => n1 + n2;

  // 함수 호출
  const result1 = add(10, 5);
  console.log(result1); // 15

  // 연습문제 2번
  // 함수 정의
  const greet = (name: string): void => console.log(`Hello, ${name}`);

  // 함수 호출
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"

  // 연습문제 3번
  // 함수 정의
  const sumAll = (...nums: number[]): number => nums.reduce((sum, num) => sum + num, 0);

  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10

  // 연습문제 4번
  // 함수 정의
  const sum = (a: number, b: number = 0): number => a + b;

  // 함수 호출
  const result2 = sum(5);
  console.log(result2); // 5

  // 연습문제 5번
  // 함수 정의
  const multiply = (a: number, b: number) => a * b;

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20

  // 연습문제 6번
  // 함수 정의
  const concatStringAndNumber = (a: string, b: number): string => `${a}${b}`;

  // 함수 호출
  const result = concatStringAndNumber("Hello", 10);
  console.log(result); // "Hello10"

  // 연습문제 7번
  // 함수 정의
  const greet2 = (name: string, message: string = "Welcome") => {
    console.log(`${message}, ${name}`);
  };

  // 함수 호출
  const greeting1 = greet2("Alice", "Hello");
  const greeting2 = greet2("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"

  // 연습문제 8번
  // 함수 정의
  const findMax = (nums: number[]): number => Math.max(...nums);

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40

  // 연습문제 9번
  // 함수 정의
  const double = (n1: number): number => n1 * 2;

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20

  // 연습문제+ 1번
  // 모르게쒀요..

  // 연습문제+ 2번
  // 함수 정의
  const doubleValue = (a: string | number): string | number => {
    if (typeof a === "number") return a * 2;
    else return a.length * 2;
  };

  // 함수 호출
  const result10 = doubleValue(5);
  const result20 = doubleValue("hello");
  console.log(result10); // 10
  console.log(result20); // 10

  // 연습문제+ 3번
  // 이것도..

  // 연습문제+ 4번
  // 이것도 잘 모르게쒀요...

  // 연습문제+ 5번
  // 함수 정의
  const formatInfo = (infos: { name: string; age?: number }): string | number => {
    if (infos.name) {
      return `Name:${infos.name}`;
    } else return `Age: ${infos.age}`;
  };

  // 함수 호출
  const info = formatInfo({ name: "Alice" });
  console.log(info); // "Name: Alice"

  // 연습문제+ 6번
  // 함수 정의
  const combineStrings = (a1: string, b1: string): string => {
    return `${a1}${b1}`;
  };

  // 함수 호출
  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"

  // 연습문제+ 7번
  // 함수 정의
  const squareArray = (numberss: number[]): number[] => numberss.map((a) => a ** 2);

  // 함수 호출
  const result70 = squareArray([1, 2, 3, 4]);
  console.log(result70); // [1, 4, 9, 16]

  // 연습문제+ 8번
  // 함수 정의
  const addStringAndNumber = (strNum: string, numStr: number): string => {
    return `${strNum}${numStr}`;
  };

  // 함수 호출
  const result80 = addStringAndNumber("The number is ", 10);
  console.log(result80); // "The number is 10"

  // 연습문제+ 9번
  // 함수 정의
  const compareValues = (numbersss: number, stringgg: string): number | string => {
    if (numbersss > parseInt(stringgg)) {
      return "Number is larger";
    } else return "String is  larger";
  };

  // 함수 호출
  const result90 = compareValues(10, "Hello");
  console.log(result90); // "Number is larger"

  // 연습문제+ 10번
  // 함수 정의
  const checkValue = (cheVal: number | string | boolean) => {
    if (typeof cheVal === "number") {
      return "It's a number";
    } else if (typeof cheVal === "string") {
      return "It's a string";
    } else if (typeof cheVal === "boolean") return "It's a boolean";
  };

  // 함수 호출
  const result100 = checkValue(true);
  console.log(result100);

  // review: 배열 여러개를 받는 건 어렵네요.. 이 부분은 다시 공부해보겠습니다..!
}
