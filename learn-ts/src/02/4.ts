{ // 왜 타입을 지정하지 않았음에도 에러가 발생하지 않는걸까?
  // 타입스크립트에는 타입 추론이라는 시스템이 내장되어 있기 때문에
  // 타입 추론 : 변수에 할당 되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상을 말함
	let num = 10;
	let name = "Hello";
	let bool = true;

	let unde = undefined; // undefined도 나중에 다른 값으로 할당하려고 비워두는거다 보니 추론할 때는 any로 추론해준다.
	let nul = null; // null은 나중에 다른 값으로 할당하려고 비워두는거다 보니 추론할 때는 any로 추론해준다.

	let symbol = Symbol("a");
	let numArr = [1, 2, 3];
	let obj = { name: "ys", age: 25 };
	let big = 100n;

  // 이미 추론을 해주기 때문에 그냥 변수에 화살표 갖다대고 복붙하면 쉽다.

  // 타입을 명시적으로 적겠다하면 적으면 되고, 아니면 그냥 타입추론으로 그대로 쓰면 된다.
  // 또 완벽하게 추론되지 않는 경우가 있기 때문에, 타입스크립트 레벨(프레임워크를 쓰지 않고 언어적, 문법적 레벨)에서는 명시적으로 타입을 적어주는게 좋은 것 같다.
  // 하지만 리액트의 관점에서는 타입추론으로 문제가 되지 않는다면 굳이 안적어도 더 편한 것 같다.
  // 강사님은 프레임워크가 껴 있지 않고 순수하게 타입스크립트만 쓰면 무조건 타입을 적어준다.
}
