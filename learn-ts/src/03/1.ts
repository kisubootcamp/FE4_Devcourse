{
  // 함수
  // return void -> 아무것도 반환하지 않음.
  // 함수 선언문 function() {...}
  // 함수 표현식 const f1 = function() {...}
  const greet: () => void = () => {
    console.log("Greet!");
  };
  greet();

  // number
  const sum: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sun = (n1: number, n2: number): number => n1 + n2;

  const res = sum(10, 20);
  console.log(res);

  const printValue: (value: string) => void = (value) => console.log(value);

  printValue("A");

  const add: (...numbers: number[]) => number = (...numbers) => {
    return numbers.reduce((res, num) => res + num, 0);
  };
  const result = add(1, 3, 5);
  console.log(result);

  const printObj: (userObj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
  };
  printObj({ name: "jaegeon" });
}
