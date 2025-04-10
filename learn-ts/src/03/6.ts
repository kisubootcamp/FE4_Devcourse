// 실무에서 타입 작게 쪼개놓고 |나 &로 사용하는 경우가 많다
{
	type User = {
		name: string;
		age: number;
	};

	type Developer = {
		skill: string;
	};

	type HumanDeveloper = User & Developer;

	let human: User = {
		name: "ys",
		age: 25,
	};

	let developer1: User & Developer = {
		name: "ys",
		age: 25,
		skill: "TypeScropt",
	};
}
