{
	// 유니온 타입
	// | <- 파이프 기호

	let value: number | string | boolean = 10;
	value = 20;
	value = "A";
	value = true;

	function printValue(value: number | string | { name: string }): void {
		console.log(value);
	}
	// printValue(10);
	// printValue("A");
	// printValue({ name: "rin" });

	// 기본타입 연습문제 ++ 4.
	let dataSet: ({ name: string; price: number } | (string | number)[])[] = [
		{ name: "Item A", price: 100 },
		["item1", 50],
		{ name: "Item B", price: 200 },
		["item2", 75],
	];

	// 타입 가드(Type Guard) -> 타입을 좁혀주는 행위
	// if ("name" in dataSet[0]) {
	// 	console.log(dataSet[0].name);
	// }

	// 함수 오버로드 -> 함수가 다야안 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능, (유니온)
	// 오버로드는 겅우의 수를 전부 추가해줘야 하는 한계가 있음

	function sum(n1: string, n2: string): string;
	function sum(n1: string, n2: number): string;
	function sum(n1: number, n2: string): string;
	function sum(n1: number, n2: number): number;
	function sum(n1: number | string, n2: number | string): number | string {
		if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
		else return `${n1}${n2}`;
	}

	const result1 = sum(1.2, 2.3);
	const result2 = sum("A", "B");
	console.log(result1.toFixed(0));
	console.log(result2);

	// 타입 단언
	const result3 = sum(1.2, 2.3) as number;
	const result4 = sum("A", "B") as string;

	// console.log(sum(10, true));

	// // 함수
	// // never void
	// let obj: Record<string, never> = {};
	// function throwError(message: string): never {
	// 	throw new Error(message);
	// }

	// // hot module reload -> H.M.R -> 지속적인 감시
	// function watchHMR(): never {
	// 	while (true) {
	// 		/* ... */
	// 	}
	// }
}
