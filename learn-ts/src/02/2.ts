{
	// 객체
	let obj1: object = {}; // 완벽하게 지정할 수 없다 -> 배열, 함수도 들어가버림
	// Record<string, never> => 객체의 키 값은 문자열, 값은 절대 올 수 없다.
	let obj2: Record<string, never> = {}; // 진정한 빈 객체

	// 래퍼 객체
	// 원시 타입 (primitive type)
	// obj = null
	// obj = undefined
	// obj = 10

	// obj = [];
	// obj = function () {};

	// tuple이랑 비슷한 방식
	let user: {
		name: string;
		age: number;
	} = {
		name: "sucoding",
		age: 20,
	};

	let person: {
		name: string;
		likeFood: string[];
		address: {
			street: string;
			city: string;
		};
		isLoggedIn: boolean;
	} = {
		name: "John",
		likeFood: ["hamburger", "pizza"],
		address: {
			street: "Gang-nam",
			city: "Seoul",
		},
		isLoggedIn: false,
	};
}
