{
	// 제네릭 타입 제약 조건
	// extends
	function getLength<T extends { length: number }>(value: T): number {
		return value.length; // 왜 에러가 나냐면 length라는 속성이 있을거라고 보장할 수 없지 않냐고 물어보는 것.
	}

	getLength([1, 2]); // ok
	getLength("abc"); // ok, 래퍼 객체
	// getLength(10); // not ok. length 속성이 없는 경우. 제약조건 전에는 호출은 가능하고 실행시 오류 났는데, 제약조건 사용하면 호출도 안된다.
}

{
  type Person = {
    name: string;
    age: number;
    gender: string; // 객체 값 가지고 키를 추출할 때는 keyof
  }

  type PersonOfKeys = keyof Person // "name" | "age", "gender";
  const key : PersonOfKeys = "gender"

  const car = {
    speed: 100,
  };


type CarOfKeys = typeof car; // 객체 값 가지고 타입 추출할 때는 typeof
}
{
  function returnTuple<T, U>(a: U, b: T): [U, T] {
    return [a, b];
  }

  const r1 = returnTuple(1, 2); //[1, 2] -> [number, number]
  const r2 = returnTuple(1, "a"); //[1, "a"] -> [number, string]
}
