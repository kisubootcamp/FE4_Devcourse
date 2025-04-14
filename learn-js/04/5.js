const a = new String("Hello"); // 인스턴스
console.log(a);
console.log(a.toUpperCase());

// String, Number, Boolean
const b = "World"; // 기본 자료형 (문자열)
console.log(b);
console.log(b.toUpperCase());
// 자바스크립트가 위의 코드를 실행할 때 내부적으로 아래의 코드로 만들어주기 때문 !!!
// new String(b)를 래퍼 객체라고 함. (일시적으로 래핑해서 프로토타입 메서드에 접근할 수 있게 해줌) -> String, Number, Boolean 이 3개만 지원함.
// 결과를 찍어낸 다음에는 원래 상태로 되돌려놓음. -> console.log(b.toUpperCase());
console.log(new String(b).toUpperCase());
