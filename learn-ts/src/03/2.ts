{
	// 유니온 타입
	// | -> 파이프 기호를 사용해 타입을 연결하는 연산자다
	let value: number | string | boolean = 10;
	value = 20;
	value = "A";
	value = true;

	function printValue(value: number | string | { name: string }): void {
		console.log(value);
	}
	printValue(10);
	printValue("A");
	printValue({ name: "ys" });
}

{
	function printValue(value: number | string | { name: string }): void {
		if (typeof value === "number") console.log(value.toFixed(2));
		else console.log(value);
	}
	printValue(10.123);
	printValue("A");

	// n1 : number, n2 : number -> number  <- number이 반환되는건 이것뿐이니까 이 조건을 if문으로 만들고
	// n1 : string, n2 : number -> string  <- 나머지 전부 else에서 처리
	// n1 : number, n2 : string -> string
	// n1 : string, n2 : string -> string
	const sum = (n1: number | string, n2: number | string): number | string => {
		if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`; // n1 + n2는 오류 나지. 그러니까 어차피 문자열인 경우를 반환.
		// else if(typeof n1 === 'string' && typeof n2 === 'string') return n1 + n2; // 이렇게 하면 위에 반환값 타입에 | undefined도 추가하면 됨.
		// else if(typeof n1 === 'string' && typeof n2 === 'number') return n1 + n2;
    // else if(typeof n1 === 'number' && typeof n2 === 'string') return n1 + n2; // 이렇게 조건을 다 따져서 적어줘도 에러가 나는데, 타입스크립트 컴파일러는 의심이 많다. 혹시라도 if문을 전부 다 만족하지 않는 값이 들어오면 어떡할건데?? 하는 의심이 있다.
    
    // throw new Error("error"); // 따라서 마지막에 에러를 던져주면 됨. 그러면 이것이 undefined를 반환할 일은 없겠구나를 확신헤서 에러가 뜨지 않음.
    // return ""; // 또는 이렇게 조건을 다 만족하지 않았을 때 반환할것을 알려주면 됨.
	};
	console.log(10 + 20);
	console.log("A" + "B");
	console.log(sum(10, 20));
	console.log(sum("A", "B"));

	// let obj : Record<string, never> = {};
	function throwError(message: string): never {
		// never타입은 반드시 절대로 반환되지 않는 값이라는 뜻을 가진다. 따라서 이 함수는 절대로 반환되지 않는 함수라는 거지.
		throw new Error(message);
	}
	// never와 void가 헷갈릴 수 있음
	// 위 함수는 void로 처리해도 okay.
	// 그런데 의미론적으로 never을 적는게 best.
	function infinitLoop(): never {
		while (true) {}
    // 왜 무한 루프 함수를 짜지? 과거에는 HMR을 구현하는 방식의 일환으로 사용했었음.
    // hot module reload -> H.M.R (사용자가 코드를 수정하고 있는지 아닌지를 실시간으로 계속 검사하는 함수)
    // function watchHMR() : never {
    //   while (true) {
    //     ....
    //   }
    // }
	}

  // 함수 오버로드 !주의! 함수선언문에서만 함수 오버로드 쓸 수 있음.
  const result1 = sum(1.2, 2.3);
  // console.log(result1.toFixed(0)); // result1은 분명 3.5라는 숫자로 나오는데, 여기에 toFixed를 하려고 하면 에러가 난다. 확신을 주면 에러 안난다.
  if (typeof result1 === "number") { // 계속 이렇게 타입가드를 한다는게 귀찮다
    console.log(result1.toFixed(0));
  }
  const result2 = sum("A", "B");

}
{
  // 함수 오버로드란 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능. (즉, 유니온타입일 때)
  function sum(n1: number, n2: number): number; // 오버로드
  function sum(n1: number, n2: string): string; // 오버로드
  function sum(n1: string, n2: number): string; // 오버로드
  function sum(n1: string, n2: string): string; // 오버로드 함수의 중괄호 열리기 전까지를 복붙한다.
  function sum(n1: number | string, n2: number | string): number | string  {
		if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2; // 오버로드를 했어도 이건 그대로 적어줘야 하는데, 오버로드는 함수 외부를 위한 처리이기 때문에. 내부 처리는 있어야 한다.
    else return `${n1}${n2}`;
	};

  // 위처럼 하고 나면 result1의 추론된 타입이 number가 되고, 타입 가드 없이 toFixed도 사용할 수 있게 됨.
  const result1 = sum(1.2, 2.3);
  console.log(result1.toFixed(0));
  const result2 = sum("A", "B"); // 오버로드를 사용하기로 마음먹었다면 모든 경우의 수를 오버로드에 적어줘야 됨.(단점), 한개라도 빠지면 함추 호출이 안됨.
  // -> 매개변수 종류가 많으면 쉽사리 오버로드를 사용하기 어렵다.


}
