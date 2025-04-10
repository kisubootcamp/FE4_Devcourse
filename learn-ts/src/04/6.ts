{
	// 이넘(enum) - 열거형, 관련된 타입을 묶어 놓는 것 // 오타 방지 가능
	// 이넘 속성은 PascalCase로 적어주는게 컨벤션
	type Status = string;
	enum StatusEnum {
		Loading = "loading",
		Success = "success",
		Error = "error",
	}

	function showStatus(status: StatusEnum) {
		// if (status === "loading") {
		// 	console.log("로딩 중...");
		// } else if (status === "success") {
		// 	console.log("성공");
		// } else if (status === "error") {
		// 	console.log("실패!");
		// }

		switch (status) {
			case StatusEnum.Loading:
				console.log("로딩 중...");
				break;

			case StatusEnum.Success:
				console.log("성공");
				break;

			case StatusEnum.Error:
				console.log("실패!");
				break;
		}
	}

	showStatus(StatusEnum.Success);

	// enum vs const enum
	// enum은 컴파일 과정 중에 남아있다. -> 번들 크기가 크지만, 디버깅이 용이함
	// const enum은 컴파일 과정 중에 남아있지 않다. -> 번들 크기가 작지만, 디버깅이 불편함
}

{
	// 기본적으로 enum은 숫자값이 할당됨.
	// 문자랑 숫자를 섞어서 써도 되지만, 문자 이후에는 값을 꼭 적어줘야 함.
	// 숫자를 중간에만 설정할 경우 그 다음 부터는 설정한 숫자보다 1큰 값이 할당됨.
	enum Direction2 {
		Up, // 0
		Dow = "Down",
		Left = 500,
		Right, // 501
	}
	console.log(Direction2);

	enum Direction1 {
		Up, // 0
		Dow = 500,
		Left, // 501
		Right, // 502
	}
	console.log(Direction1);

	// 숫자 열거형 enum
	enum Direction {
		Up,
		Down,
		Left,
		Right,
	}

	console.log("Up");
	console.log(Direction.Up); // <- 더 명확히 나타내 줄 수 있다. 어디의 Up인지.

	enum StatusCode {
		OK = 200,
		BadRequest = 400,
		Unauthorized = 401,
		NotFound = 404,
	}

	console.log(StatusCode.OK); // 200
	console.log(StatusCode[200]); // OK    // 리버스 매핑 : 값으로 키값 찾는 것.
	// 리버스 매핑은 enum으로 선언했을 때는 가능하지만, 컴파일 시 코드가 남아있기 때문에 역방향 매핑해서.
	// const enum으로 선언했을 때는 컴파일 시 코드가 남지 않기 때문에 역방향 매핑이 불가능해서, 리버스 매핑이 불가능.
}
{
	// 문자 열거형
	// 문자 열거형은 무조건 값을 넣어줘야 됨.
	enum Status {
		Loading = "loading",
		Error = "error",
		Success = "success",
	}

	// 혼합 열거형
	// 숫자 문자 혼합한걸 혼합 열거형이라고 하는데, 잘 사용하지 않는 방식이다.
	enum Status1 {
		Loading = "loading",
		Error = 0,
		Success = "success",
	}

	interface Api {
		data: string;
		status: Status1;
	}

	const api: Api = {
		data: "success",
		status: Status1.Error,
	};
}
