{
// 함수 정의
const add: (num1: number, num2:number): void = (num1,num2) => console.log(num1+num2)

// 함수 호출
const result = add(10, 5);


//2
// 함수 정의
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

const greet = function(name: string): void {
  console.log(`Hello, ${name}`);
};

const greet = (name: string): void => {
  console.log(`Hello, ${name}`);
};

// 함수 호출
const greeting = greet('Alice');
console.log(greeting);  // "Hello, Alice!"

//3
// 함수 정의
const sumAll = (...nums: number[]): number => nums.reduce((sum,num)=> sum + num, 0)

// 함수 호출
const total = sumAll(1, 2, 3, 4);
console.log(total); // 10

//4
// 함수 정의

const sum = (num1: number, num2: number = 0): number => num1 + num2;
//또는
const sum = function(num1:number, num2:number = 0):number{
  return num1+num2
}


// 함수 호출
const result = sum(5);
console.log(result); // 5


//5번
// 함수 정의
const multiply = (a:number, b:number):number => a*b;

// 함수 호출
const product = multiply(4, 5);
console.log(product); // 20

//6
// 함수 정의
const concatStringAndNumber = (a:string, b:number) => `${a}${b}`

// 함수 호출
const result = concatStringAndNumber("Hello", 10);
console.log(result); // "Hello10"


}