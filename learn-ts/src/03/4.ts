{
	// 유니온 타입 '|' (파이프)
	// 인터섹션 타입 '&' (앰퍼센드)

	let value1: string | number; // 숫자 or 문자
	let value2: string & number; // 숫자 and 문자???

	// & -> 객체에만 사용

	let value3: { name: string } & { readonly age?: number };
	value3 = { name: "John" /* age: 20 */ };
}

{
	let value1: String = "A"; // String 객체 타입

	let value2: string = "A"; // string 타입
	// value2 = new String("a"); // 안됨
}
