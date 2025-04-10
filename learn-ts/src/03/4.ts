{
	// 유니온 타입 | (파이프)    expr1 || expr2랑 비슷하네?
	// 인터섹션 타입 & (엠퍼샌드) expr1 && expr2랑 비슷하네?

	let value: string | number; // 숫자, 문자
	let value2: string & number; // string이면서 number여야 참 -> 그런 타입이 없기 때문에 기본 타입에서는 사용하지 않음.
	let value3: { name: string } & { age: number }; // 이렇게 객체일 때 사용한다.
	value3 = {
		name: "ys",
		age: 20,
	};
	// {name: string, age?: number}
	let value4: { name: string } & { readonly age?: number }; // <- 뭐하러 쪼개나?
	value4 = {
		name: "ys",
	};
	console.log(value4);
}

{
  // string과 String은 다르다.
	let value1: string = "A"; // string 타입
  value1 = new String("A") // not ok

	let value2: String = "B"; // String 객체 타입
  value2 = new String("B") // ok


}
