{
  //1. 여러개의 숫자배열을 받아 합을 구하는 함수
  // 문제 설명: sumAllNumbers 함수는 여러 개의 숫자 배열을 인자로 받아 각 배열의 합을 구하여 반환하는 함수입니다. rest parameter와 map을 사용하여 여러 배열을 처리하고 결과를 반환해야 합니다.
  //TODO
  //   const sumAllNumbers = (arr: number[], ...rest: number[]) => {
  //     for (let i = 0; i < arr.length; i++) {
  //       let total = 0;
  //       arr.map((num) => (total += num));
  //     }
  //   };
  //   console.log(total);
  //   const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  //   console.log(result);
}

{
  //TODO
  //2. 숫자 또는 문자열을 받아 그 값을 두 배로 만드는 함수
  // doubleValue 함수는 숫자나 문자열을 인자로 받습니다. 숫자라면 두 배를 반환하고, 문자열이라면 문자열 길이를 두 배로 반환합니다. 함수의 반환값 타입을 지정해보세요.

  function double(param: number | string): number {
    if (typeof param === "number") {
      return param * 2;
    } else if (typeof param === "string") {
      return param.length * 2;
    }
    throw new Error("error");
  }
}
{
  //3. 두 숫자 배열을 받아 각 배열의 곱을 구하는 함수
  // multiplyArrays 함수는 두 개의 숫자 배열을 받아 각 배열에서 해당 인덱스의 숫자를 곱한 값을 새로운 배열로 반환합니다. 배열의 길이가 다르면 짧은 배열에 맞춰서 곱셈을 해야 합니다.

  const multiplyArrays = {};
}
