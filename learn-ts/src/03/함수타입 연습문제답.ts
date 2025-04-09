{
  //1
   const result = add(10,5)
   console.log(result);
  //2
  //함수 정의
  const greet = (name: string):void => console.log((`Hello, ${name}`));

  //함수 호출
  const greeting = greet("Alice")
  console.log(greeting);

  //3
  //함수 정의
  const sumAll = (...nums: number[]): number => nums.reduce((sum,num)=> sum+num, 0)

  //함수 호출
  const total = sumAll(1,2,3,4);
  console.log(total);
  
  //4
  //함수 정의
  const sum = (a: number, b:number =0):number => a+b;
  
  //함수 호출
  const result = 

  //5
  //함수 정의
  const multiply = (a:number, b:number) => a*b

  //함수 호출
  const product = multiply(4,5)
  console.log(product);

  //6
  //함수 정의
  const concatStringAndNumber = (a:string, b:number): string => `${a}${b}`;
  //함수 호출
  concat result = concatStringAndNumber("Hello",10)
  console.log(result);

  //7
  //함수 정의
  const greet= (name:string,  message?: = "Welcome") =>{};

  //함수 호출
  const greeting1 = greet("Alice", "Hello")
  const greeting2 = greet("Bob");

  //8
  //함수 정의
  const findMax = (nums: number[]):number => Math.max(...nums)
  //함수 호출
  const max = findMax([10,20,30,40])
  console.log(max);

  //9
  //함수 정의
  const double = 
  //함수 호출


  //10
  //함수 정의

  //함수 호출
}