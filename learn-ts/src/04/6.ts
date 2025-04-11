{
	// 이넘(enum) - 열거형, 관련된 타입을 묶어 놓는 것
	// enum과 const enum의 차이
	// enum: 번들 크기가 크지만, 디버깅이 용이함
	// const enum: 번들 크기가 작지만, 디버깅이 불편함

	enum Status {
		Loading = "loading",
		Success = "success",
		Error = "error",
	}
	function showStatus(status: Status) {
		switch (status) {
			case Status.Loading:
				console.log("로딩 중...");
				break;
			case Status.Success:
				console.log("성공");
				break;
			case Status.Error:
				console.log("실패!");
				break;
		}
	}

	showStatus(Status.Error);
}

{
	// enum 숫자값이 할당됨
	// 숫자 열거형 enum
	// 아무것도 할당하지 않으면 숫자가 순차적으로 할당됨 (0,1,2,3...)
	// 중간에 숫자를 할당하면 그 바꾼 숫자부터 1씩 증가하는 형태로 할당
	enum Direction {
		Up,
		Down = 500,
		Left,
		Right,
	}

	console.log(Direction.Up);
	console.log(Direction.Down);
	console.log(Direction.Left);
	console.log(Direction.Right);

	// 숫자 열거형은 주로 상태 코드 정의할 때 사용, 그외에는 그닥
	enum StatusCode {
		OK = 200,
		BadRequest = 400,
		Unauthorized = 401,
		NotFound = 404,
	}

	console.log(StatusCode.OK);
	console.log(StatusCode[200]); // 리버스 매핑
	// 값으로 키를 가져옴
	// 리버스 매핑은 const enum에서는 불가능
}

{
	// 문자 열거형
	// 문자 열거형은 반드시 값을 넣어줘야 함 (숫자도 상관없음)
	// 혼합 열거형: 문자 숫자 둘 다 있음, 별로 안 쓰임
	enum Status {
		Loading = "loading",
		Error = "error",
		Success = "success",
	}

	// enum을 interface나 type의 재료로 사용가능
	interface Api {
		data: string;
		status: Status;
	}

	const api: Api = {
		data: "success",
		status: Status.Loading,
	};
}
