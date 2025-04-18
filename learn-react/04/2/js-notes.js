// 기본값 설정하는 방법 (truthy/falsy에 따라 기본값 대입)
function printName(name) {
  console.log(name | "John Doe");
}
// 둘 중 하나가 truthy면 참으로 평가
// name이 undefined면 falsy -> "John Doe"가 출력됨
printName();
