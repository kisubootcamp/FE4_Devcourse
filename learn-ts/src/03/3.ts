{
	// 옵셔널 파라미터
	function printUserInfo(name: string): void;
	function printUserInfo(name: string, age: number): void; // 오버로드 가능. 
	function printUserInfo(name: string, age?: number): void {
		if (name && age) {
			console.log(`${name}, ${age}`);
		} else console.log(`${name}`);
	}

	printUserInfo("ys", 25);
	printUserInfo("ys"); // 에러 발생. js에서는 에러 나지 않지만, ts에서는 에러가 난다. 따라서 매개변수에 ?를 적어서 옵션으로 만들어주면 된다.
	// 옵셔널 주의 : 첫번째 파라미터가 옵션인데 두번째 파라미터가 옵션이 아닐 수는 없음.
	// 왜냐면 항상 오는 파라미터는 처음에 와야 하기 때문에.
	// 즉, 모두를 옵셔널로 쓰거나, 뒤쪽거만 옵셔널로 써줘야 됨.
}
