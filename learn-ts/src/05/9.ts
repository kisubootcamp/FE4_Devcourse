{
	// 조건부 타입
	// T extends U ? X : Y
	// extends를 쓰지만 타입 제약과 다름

	type IsString<T> = T extends string ? "Yes" : "No";
	// "Yes" type or "No" type
	type A = IsString<string>;
	type B = IsString<number>;

	const a: A = "Yes";
	const b: B = "No";
}

{
	// 조건부 + infer
	type ElementType<T> = T extends (infer U)[] ? U : T;
	type A = ElementType<10>;
	type B = ElementType<[1, 2, 3]>; // number[] -> number
	type C = ElementType<["a", "b"]>; // string[] -> string
	type D = ElementType<[true, false]>; // boolean[] -> boolean
}

{
	type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
}
