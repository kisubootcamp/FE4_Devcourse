// 제네릭 연습문제
// 연습문제
{
	//   ### 1. **숫자 배열의 첫 번째 값 구하기**

	// ### 문제:

	// 다음은 숫자 배열에서 첫 번째 값을 구하는 함수입니다. 제네릭을 활용하여 숫자뿐만 아니라 다른 타입의 배열에서도 첫 번째 값을 구할 수 있도록 개선해보세요.

	// ### 기존 코드:

	function getFirst<T>(arr: T[]): T {
		return arr[0];
	}

	console.log(getFirst([1, 2, 3])); // 1

	// ### 요구 사항:

	// - 배열의 타입에 관계없이 첫 번째 값을 구할 수 있도록 제네릭을 사용하세요.
}
{
	//   ### 2. **배열의 길이 구하기**

	// ### 문제:

	// 배열의 길이를 반환하는 함수입니다. 제네릭을 사용하여 다양한 타입의 배열에 대해 동작하도록 수정하세요.

	// ### 기존 코드:

	function getLength<T>(arr: T[]): number {
		return arr.length;
	}

	console.log(getLength([1, 2, 3])); // 3

	// ### 요구 사항:

	// - 배열의 타입에 관계없이 배열의 길이를 구할 수 있도록 제네릭을 사용하세요.
}
{
	//   ### 3. **배열에서 마지막 값 구하기**

	// ### 문제:

	// 배열에서 마지막 값을 반환하는 함수입니다. 제네릭을 사용하여 모든 타입의 배열에서도 마지막 값을 구할 수 있도록 개선하세요.

	// ### 기존 코드:

	function getLast<T>(arr: T[]): T {
		return arr[arr.length - 1];
	}

	console.log(getLast([1, 2, 3])); // 3

	// ### 요구 사항:

	// - 배열의 타입에 관계없이 마지막 값을 구할 수 있도록 제네릭을 사용하세요.
}
{
	// ❌
	// ### 4. **두 값을 더하는 함수**

	// ### 문제:

	// 두 값을 더하는 함수입니다. 제네릭을 사용하여 숫자뿐만 아니라 다른 타입의 값을 더할 수 있도록 개선하세요.

	// ### 기존 코드:

	function add<T>(a: T, b: T): string | number {
		if (typeof a == "number" && typeof b == "number") {
			return a + b;
		} else {
			return `${a}${b}`;
		}
	}

	console.log(add(2, 3)); // 5
	console.log(add(true, false));

	// ### 요구 사항:

	// - 숫자뿐만 아니라 다른 타입에 대해서도 더할 수 있도록 제네릭을 사용하세요.
}
{
	//   ### 5. **객체에서 특정 키의 값 구하기**

	// ### 문제:

	// 객체에서 특정 키의 값을 반환하는 함수입니다. 제네릭을 사용하여 다양한 객체에 대해 특정 키의 값을 안전하게 구할 수 있도록 개선하세요.

	// ### 기존 코드:

	function getValue<K>(obj: { name: K }): K {
		return obj.name;
	}

	console.log(getValue({ name: "Alice" })); // "Alice"

	// ### 요구 사항:

	// - 객체의 타입에 맞게 동작하도록 제네릭을 사용하세요.
}
{
	//   ### 6. **두 값을 비교하는 함수**

	// ### 문제:

	// 두 값을 비교하여 같은 값이면 `true`, 아니면 `false`를 반환하는 함수입니다. 제네릭을 사용하여 다양한 타입에 대해 동작할 수 있도록 개선하세요.

	// ### 기존 코드:

	function isEqual<K>(a: K, b: K): boolean {
		return a === b;
	}

	console.log(isEqual(2, 2)); // true

	// ### 요구 사항:

	// - 제네릭을 사용하여 다른 타입의 값들에 대해서도 비교할 수 있도록 하세요.
}
{
	// ❌ -> ✅
	//   ### 7. **배열의 모든 값을 제곱하는 함수**

	// ### 문제:

	// 배열의 모든 값을 제곱하는 함수입니다. 제네릭을 사용하여 숫자뿐만 아니라 다양한 타입의 배열에 대해 제곱할 수 있도록 개선하세요.

	// ### 기존 코드:

	function square<T>(arr: T[]): number[] {
		return arr.map((num) => {
			if (typeof num === "string") {
				return num.length * num.length;
			} else if (typeof num === "number") {
				return num * num;
			} else if (typeof num === "boolean") {
				return num ? 1 : 0;
			}
			throw new Error("계산이 불가능한 타입입니다.");
		});
	}

	console.log(square([1, 2, 3])); // [1, 4, 9]

	// ### 요구 사항:

	// - 숫자뿐만 아니라 다른 타입의 배열에도 동작할 수 있도록 제네릭을 사용하세요.
}
{
	//   ### 8. **배열의 첫 번째와 마지막 값을 반환하는 함수**

	// ### 문제:

	// 배열에서 첫 번째와 마지막 값을 반환하는 함수입니다. 제네릭을 사용하여 모든 타입의 배열에서 첫 번째와 마지막 값을 구할 수 있도록 개선하세요.

	// ### 기존 코드:

	function getFirstAndLast<T>(arr: T[]): T[] {
		return [arr[0], arr[arr.length - 1]];
	}

	console.log(getFirstAndLast([1, 2, 3])); // [1, 3]

	// ### 요구 사항:

	// - 제네릭을 사용하여 다양한 타입의 배열에서 첫 번째와 마지막 값을 반환하도록 개선하세요.
}
{
	//   ### 8. **배열의 첫 번째와 마지막 값을 반환하는 함수**

	// ### 문제:

	// 배열에서 첫 번째와 마지막 값을 반환하는 함수입니다. 제네릭을 사용하여 모든 타입의 배열에서 첫 번째와 마지막 값을 구할 수 있도록 개선하세요.

	// ### 기존 코드:

	function getFirstAndLast<T>(arr: T[]): T[] {
		return [arr[0], arr[arr.length - 1]];
	}

	console.log(getFirstAndLast([1, 2, 3])); // [1, 3]

	// ### 요구 사항:

	// - 제네릭을 사용하여 다양한 타입의 배열에서 첫 번째와 마지막 값을 반환하도록 개선하세요.
}
{
	//   ### 10. **배열에서 고유한 값을 반환하는 함수**

	// ### 문제:

	// 배열에서 중복을 제거하고 고유한 값만 반환하는 함수입니다. 제네릭을 사용하여 다양한 타입의 배열에 대해서도 동작하도록 개선하세요.

	// ### 기존 코드:

	function getUnique<T>(arr: T[]): T[] {
		return Array.from(new Set(arr));
	}

	console.log(getUnique([1, 2, 2, 3])); // [1, 2, 3]

	// ### 요구 사항:

	// - 제네릭을 사용하여 다른 타입의 배열에도 동작하도록 개선하세요.
}

// 연습문제+
{
	//   ### 1. **배열 합계 계산 함수 개선**

	// ### 문제:

	// 다음은 숫자 배열의 합을 구하는 함수입니다. 이 함수를 제네릭을 활용해 배열 타입에 상관없이 재사용 가능한 함수로 개선해보세요.

	// ### 기존 코드:

	function sumArray<T extends number | string>(arr: T[]): T {
		if (arr.length === 0) {
			return (typeof arr[0] === "string" ? "" : 0) as T;
		}
		return arr.reduce((acc, curr) => (acc as any) + curr) as T;
	}

	console.log(sumArray([1, 2, 3])); // 6

	// ### 요구 사항:

	// - 배열의 타입에 관계없이 동작하도록 제네릭을 사용해보세요.
	// - 숫자뿐만 아니라 `string` 타입 배열도 처리할 수 있도록 합니다.
}
