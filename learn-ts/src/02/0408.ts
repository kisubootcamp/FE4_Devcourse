{
  //오늘 타입 지정하는걸 배우면서 자바스크립트는 그냥 쉽게 타입지정안해도 되는데 왜 복잡하게
  //타입 지정해가며 쓸까? 생각했는데 오히려 그 타입을 지정해줘서 . Javascript로 코드를 작성할 때,
  //  객체의 필드나 함수의 매개변수로 들어오는 값이 무엇인지 알기 위해 여러 파일을 살펴야 했지만
  //  TypeScript를 사용한다면 변수의 이름 뿐만 아니라 그 테이터의 자료형까지 알 수 있게 된다고한다

  /* 타입스크립트 기본타입
string
number
boolean
object
Array
tuple
any
null
undefined
bigint
*/
  //선언 방법
  let name1: string = "Alice";
  let name2 = "John"; //타입을 지정안해도 타입추론때문에 자동으로 타입선언됨

  //나머지 타입도 마찬가지 null과undefined는 선언 안하면 any로 선언됨

  // 6. any - 아무거나 허용하겠다
  // -> 타입을 검사하지 않겠다.
  // -> 타입 검사를 무력화 하는 타입이기 때문에 남용을 피해야 함.
  // -> 전부 개발자 탓.
  let anything: any = 10;
  anything = 20;
  anything = 30;
  anything = "A";
  anything = true;
  anything = null;
  anything = undefined;
  // anything.toFixed(2);

  // 7. unknown(any 순한맛, 안전한 any)
  // -> 타입 검사를 하지 않아요.
  // -> 단, 그 값을 사용하려고 할 때는 타입을 검증해야 함.
  let input: unknown = "Hello";
  input = 10;
  input = true;
  input = undefined;
  input = null;
  input = 3.14;
  //any나unknown은 강사님이 말하길 처음에써도 나중에 고쳐야한다함

  //연습문제 튜플로 풀었을때 하나씩 다 넣어야함
  let mixedData: [
    { type: string; name: string; age: number },
    { type: string; name: string; age: number },
    { type: string; id: number; name: string; price: number },
    { type: string; id: number; name: string; price: number }
  ] = [
    { type: "user", name: "Alice", age: 30 },
    { type: "user", name: "Bob", age: 25 },
    { type: "product", id: 1, name: "Laptop", price: 999 },
    { type: "product", id: 2, name: "Smartphone", price: 499 },
  ];
  console.log(mixedData);

  //오늘 안배우고 내일 배울 유니온타입 적용시
  let mixedData2: (
    | {
        type: string;
        name: string;
        age: number;
        id?: undefined;
        price?: undefined;
      }
    | {
        type: string;
        id: number;
        name: string;
        price: number;
        age?: undefined;
      }
  )[] = [
    { type: "user", name: "Alice", age: 30 },
    { type: "user", name: "Bob", age: 25 },
    { type: "product", id: 1, name: "Laptop", price: 999 },
    { type: "product", id: 2, name: "Smartphone", price: 499 },
  ];
}
