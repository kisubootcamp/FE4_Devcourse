/*
 1. 변수 타입 확인
    1. 다음 변수들의 타입을 확인하여 콘솔에 출력하세요.
    
    ```jsx
    let num = 42;
    let name = "John";
    let isTrue = true;
    let person = { name: "Alice", age: 30 };
    let fruits = ["apple", "banana", "orange"];
    ```
    
2. 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요.
    
    ```jsx
    let length = 16;  //  
    let lastName = "Brown";  //
    let score = [10, 20];
    let x = {
      firstName: "Nick",
      lastName: "Doe"
    }; // 
    ```

*/

//1
{
  let num = 42;
  let name = "John";
  let isTrue = true;
  let person = { name: "Alice", age: 30 };
  let fruits = ["apple", "banana", "orange"];

  console.log(typeof num);
  console.log(typeof name);
  console.log(typeof isTrue);
  console.log(typeof person);
  console.log(typeof fruits);
}

//2
{
  let length = 16; //Number
  let lastName = "Brown"; //String
  let score = [10, 20]; //Number Array
  let x = {
    firstName: "Nick",
    lastName: "Doe",
  }; //Object
}
