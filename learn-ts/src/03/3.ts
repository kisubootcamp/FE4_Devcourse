{
	function printUserInfo(name: string): void;
	function printUserInfo(name: string, age: number): void;
	function printUserInfo(name: string, age?: number): void {
		if (name && age) {
			console.log(`${name}, ${age}`);
		} else console.log(`${name}`);
	}

	printUserInfo("sucoding");
	printUserInfo("newcoding", 20);

	// 옵셔널 파라미터를 쓸 때는 모두 ?를 붙이거나 뒷쪽에만 ?를 붙여야 작동함
}
