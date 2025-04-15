{
  //1. **유니언 타입을 사용한 함수 구현: 타입에 따라 다르게 처리하기**
  //**문제:** `input`으로 `string`, `number`, 또는 `boolean`을 받을 수 있는 함수 `processInput`을 작성하세요.

  function processInput(input: string | number | boolean): string | number | boolean {
    if (typeof input === "string") {
      return input.toUpperCase();
    } else if (typeof input === "number") {
      return input * input;
    } else return true ? "YES" : "NO";
  }

  // 테스트 케이스
  console.log(processInput("hello")); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"
}
