{
  //함수 연습문제
  //1.
  const add = (a: number, b: number): number => {
    return a + b;
  };
  const result = add(10, 5);
  console.log(result); // 15

  //2.
  // 함수 정의
  const greet = (a: string): string => {
    return `Hello,${a}!`;
  };

  //   const greet = (a: string) => `Hello,${a}!`; //라고하면 리턴값이라고 인지하므로 타입 추론을 undefined로 함

  // 함수 호출
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"

  //3.?
  // 함수 정의
  //   const sumAll = (...arr: number[]): number => {
  //     let res = 0;
  //     for (let a of arr) {
  //       res += a;
  //     }
  //     return res;
  //   };
  const sumAll = (...nums: number[]): number =>
    nums.reduce((sum, num) => sum + num, 0);
  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10

  //4.?
  // 함수 정의
  const sum = (a: number, b: number = 0): number => a + b;

  // 함수 호출
  const result1 = sum(5);
  console.log(result1); // 5

  //5.
  // 함수 정의
  const multiply = (a: number, b: number): number => a * b;

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20

  //6.
  // 함수 정의
  const concatStringAndNumber = (a: string, b: number): string => `${a}${b}`;
  //a+b;로해도됨

  // 함수 호출
  const result2 = concatStringAndNumber("Hello", 10);
  console.log(result2); // "Hello10"

  //7.?
  // 함수 정의
  const greet2 = (name: string, message: string = "Welcome") => {
    console.log(`${message}, ${name}!`);
  };

  // 함수 호출
  const greeting1 = greet2("Alice", "Hello");
  const greeting2 = greet2("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"

  //8.!
  // 함수 정의
  const findMax = (arr: number[]): number => Math.max(...arr);

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40

  //9.
  // 함수 정의
  const double = (a: number): number => a * 2;

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}

{
  //함수 연습문제+
  //1.?
  // 함수 정의
  const sumAllNumbers = (...a:number[][]):number[]{
    return a.map(arr=>arr.reduce((sum,num)=>sum+num,0))
  }

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]

  //2.
  // 함수 정의
    function doubleValue(a:number|string):number{
        if(typeof a==="number") return a*2;
        else return a.length*2;
    }

  // 함수 호출
    const result1 = doubleValue(5); 
    const result2 = doubleValue("hello"); 
    console.log(result1); // 10
    console.log(result2); // 10

  //3.
  // 함수 정의
    const multiplyArrays =(a:number[],b:number[]):number[]=>{
        let arr=[];
        let max=Math.max(a.length,b.length);
        for(let i=0;i<max;i++){
            arr.push(a[i]*b[i]);
        }
        return arr;
    }

  // 함수 호출
    const result3 = multiplyArrays([1, 2, 3], [4, 5, 6]);
    console.log(result3); // [4, 10, 18]

    //4.
    // 함수 정의
const intersection = (arr1:number[],arr2:number[]):number[]=>{
    let filtered=arr1.filter((item)=>arr2.includes(item));
    return filtered;
}

// 함수 호출
const result4 = intersection([1, 2, 3], [2, 3, 4]);
console.log(result4); // [2, 3]


}
