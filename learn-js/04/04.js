// String, Number, Boolean, Date, Object, Function, Math, ...
// 표준 내장 객체
// 메서드들이 prototype에 없으면 문자를 정의할 때마다 모든 메서드가 불러와진다.
// 메서드를 prototype에 넣는 이유는 메모리 효율이 좋아져서이다

const a = new String("Hello");
console.log(a.toUpperCase());
console.dir(a.__proto__);

// String, Number, Boolean
// 래퍼 객체
const b = "Hello"; // 기본 자료형
console.dir(b.__proto__);
console.log(b.toUpperCase());
// console.log(new String(b).toUpperCase()) 자바스크립트 엔진이 내부적으로 이렇게 변환(래핑)하여 연산한 후 인스턴스 객체로 출력해준다
// 출력한 이후 코드를 다시 console.log(b.toUpperCase())로 되돌린다

// 인스턴스는 내부적으로 생성자 함수의 프로토타입의 내부 메서드에 접근할 수 있다.
// 프로토타입 체인으로 .__proto__.를 생략할 수 있는 것.

// static은 인스턴스화 되지 않는다.
// new를 쓰지 않은 래퍼 객체는 console을 사용할 때 래핑이 되지 않은 상태를 출력한다.
// 메서드 호출이나 프로퍼티 참조 시 래핑을 하고 참조가 끝나면 임시 객체는 바로 소멸을 한다.
