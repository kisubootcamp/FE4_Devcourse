{
	//   문제 9: 단일 숫자를 두 배로 만드는 함수
	// double 함수는 하나의 숫자를 받아 그 값을 두 배로 만들어 반환하는 함수입니다. 이 함수의 타입을 지정하고 호출하여 결과를 출력해보세요.
	// 함수 정의
	function double(num: number): number {
		return num * 2;
	}

	// 함수 호출
	const doubled = double(10);
	console.log(doubled); // 20
}