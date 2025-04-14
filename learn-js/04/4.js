// JavaScript 표준 내장 객체
// 정적 메서드 : 인스턴스 없이 접근할 수 있음.
// 인스턴스 메서드 : new 라는 키워드로 인스턴스를 만들었을 때 접근할 수 있음.
// String, Number, Boolean, Date, Object, Function, Math, Reg
// String.prototype.chatAt() 등의 인스턴스 메서드가 프로토타입에 등록되어 있는 이유
// -> String 객체를 만들 때마다 모든 내장 메서드를 멤버 메서드로 넣어줄 필요가 없기 때문.
// -> 어차피 프로토타입으로 접근이 가능하므로 !
// -> 메모리 절약 !
