// 함수 타입 연습문제
// 연습문제
{
	// ### **문제 1: 두 수의 합을 구하는 함수**
	// 다음과 같은 `add` 함수가 있습니다. `add` 함수는 두 개의 숫자(`a`, `b`)를 받아 그 합을 반환합니다. 적절한 타입을 붙여서 함수 정의를 하고, 두 개의 숫자를 넘겨서 호출하고 결과를 출력해보세요.

	// 함수 정의
	function add(a: number, b: number): number {
		return a + b;
	}

	// 함수 호출
	const result = add(10, 5);
	console.log(result); // 15
}

{
	// ### **문제 2: 이름을 받아 인사하는 함수**
	// `greet` 함수는 사용자의 이름을 받아 `"Hello, {name}!"`을 출력하는 함수입니다. `name` 파라미터는 필수로 받아야 하며, 적절한 타입을 붙여서 함수 정의를 하고, 함수를 호출해보세요.

	// 함수 정의
	function greet(name: string): string {
		return `Hello, ${name}!`;
	}

	// 함수 호출
	const greeting = greet("Alice");
	console.log(greeting); // "Hello, Alice!"
}

{
	// ### **문제 3: 숫자 배열을 받아 합을 구하는 함수**
	// `sumAll` 함수는 여러 개의 숫자를 받아 그 합을 반환하는 함수입니다. `sumAll` 함수는 `rest parameter`를 사용하여 배열의 길이에 관계없이 숫자들을 받을 수 있어야 합니다. 함수 호출 후 결과를 출력해보세요.

	// 함수 정의
	function sumAll(...numbers: number[]): number {
		return numbers.reduce((acc, cur) => acc + cur, 0);
	}

	// 함수 호출
	const total = sumAll(1, 2, 3, 4);
	console.log(total); // 10
}

{
	//   문제 4: 기본값을 설정한 덧셈 함수
	// sum 함수는 두 숫자를 더하는 함수입니다. a는 필수 매개변수로 받고, b는 기본값을 0으로 설정합니다. 이 함수에 타입을 지정하고 호출해보세요.
	// 함수 정의
	function sum(a: number, b: number = 0): number {
		return a + b;
	}

	// 함수 호출
	const result = sum(5);
	console.log(result); // 5
}

{
	//   문제 5: 두 수를 곱하는 함수
	// multiply 함수는 두 숫자(a, b)를 받아 그들의 곱을 반환하는 함수입니다. 매개변수와 반환값의 타입을 적절히 지정하고, 함수를 호출하여 결과를 출력해보세요.
	// 함수 정의
	function multiply(a: number, b: number): number {
		return a * b;
	}

	// 함수 호출
	const product = multiply(4, 5);
	console.log(product); // 20
}

{
	//   문제 6: 문자열과 숫자를 결합하는 함수
	// concatStringAndNumber 함수는 문자열(a)과 숫자(b)를 받아 그 합을 문자열로 반환합니다. 매개변수의 타입을 적절히 지정하고, 함수를 호출해보세요.
	// 함수 정의
	function concatStringAndNumber(a: string, b: number): string {
		return `${a}${b}`;
	}

	// 함수 호출
	const result = concatStringAndNumber("Hello", 10);
	console.log(result); // "Hello10"
}

{
	//   문제 7: 옵셔널 파라미터를 사용한 인사 함수
	// greet 함수는 이름을 받아 인사말을 반환합니다. name 파라미터는 필수로 받되, message 파라미터는 옵셔널 파라미터로 받습니다. message가 없으면 기본값 "Welcome"을 사용해야 합니다. 이 함수의 타입을 지정하고, 호출해보세요.
	// 함수 정의
	function greet(name: string, message: string = "Welcome"): string {
		// 초기값을 설정하면 옵셔널 파라미터로 처리할 수 없다.
		return `${message}, ${name}!`;
	}

	// 함수 호출
	const greeting1 = greet("Alice", "Hello");
	const greeting2 = greet("Bob");
	console.log(greeting1); // "Hello, Alice!"
	console.log(greeting2); // "Welcome, Bob!"
}

{
	//   문제 8: 숫자 배열의 최대값을 구하는 함수
	// findMax 함수는 숫자 배열을 받아 그 배열의 최대값을 반환하는 함수입니다. 이 함수의 타입을 지정하고 호출해서 배열의 최대값을 출력해보세요.
	// 함수 정의
	function findMax(numbers: number[]): number {
		return Math.max(...numbers);
	}

	// 함수 호출
	const max = findMax([10, 20, 30, 40]);
	console.log(max); // 40
}

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

// 연습문제+
{
	//   문제 1: 여러 개의 숫자 배열을 받아 합을 구하는 함수
	// 문제 설명: sumAllNumbers 함수는 여러 개의 숫자 배열을 인자로 받아 각 배열의 합을 구하여 반환하는 함수입니다. rest parameter와 map을 사용하여 여러 배열을 처리하고 결과를 반환해야 합니다.
	// 함수 정의
	const sumAllNumbers = (...numbers: number[][]): number[] => {
		const result = numbers.map((number) => {
			return number.reduce((acc, cur) => acc + cur, 0);
		});
		return result;
	};

	// 함수 호출
	const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
	console.log(result); // [3, 12, 13]
}

{
	//   문제 2: 숫자 또는 문자열을 받아 그 값을 두 배로 만드는 함수
	// 문제 설명: doubleValue 함수는 숫자나 문자열을 인자로 받습니다. 숫자라면 두 배를 반환하고, 문자열이라면 문자열 길이를 두 배로 반환합니다. 함수의 반환값 타입을 지정해보세요.
	// 함수 정의
	const doubleValue = (value: number | string): number => {
		if (typeof value === "number") return value * 2;
		else return value.length * 2;
	};

	// 함수 호출
	const result1 = doubleValue(5);
	const result2 = doubleValue("hello");
	console.log(result1); // 10
	console.log(result2); // 10
}

{
	//   문제 3: 두 숫자 배열을 받아 각 배열의 곱을 구하는 함수
	// 문제 설명: multiplyArrays 함수는 두 개의 숫자 배열을 받아 각 배열에서 해당 인덱스의 숫자를 곱한 값을 새로운 배열로 반환합니다. 배열의 길이가 다르면 짧은 배열에 맞춰서 곱셈을 해야 합니다.
	// 함수 정의
	const multiplyArrays = (n1: number[], n2: number[]): number[] => {
		if (n1.length <= n2.length) {
			const result = n1.map((e, idx) => {
				return e * n2[idx];
			});
			return result;
		} else {
			const result = n2.map((e, idx) => {
				return e * n1[idx];
			});
			return result;
		}
	};

	// 함수 호출
	const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
	console.log(result); // [4, 10, 18]

	const result1 = multiplyArrays([1, 2], [4, 5, 6]);
	console.log(result1);

	const result2 = multiplyArrays([1, 3, 6], [4, 5]);
	console.log(result2);
}

{
	//   문제 4: 두 개의 배열을 받아 교차된 값을 반환하는 함수
	// 문제 설명: intersection 함수는 두 개의 배열을 받아 교차된 값들만 반환하는 함수입니다.
	// 두 배열에서 겹치는 값들을 찾아 반환해보세요.
	// 함수 정의
	const intersection = (n1: number[], n2: number[]): number[] => {
		const result = n1.filter((e) => {
			if (n2.includes(e)) {
				return e;
			}
		});
		return result;
	};

	// 함수 호출
	const result = intersection([1, 2, 3], [2, 3, 4]);
	console.log(result); // [2, 3]
}

{
	//   문제 5: 객체의 필드 값에 따라 출력 형식을 다르게 하는 함수
	// 문제 설명: formatInfo 함수는 객체를 받아, name 필드가 존재하면 "Name: {name}"을 출력하고, age 필드가 존재하면 "Age: {age}"를 출력합니다. 매개변수 타입을 지정하고 호출해보세요.
	// 함수 정의
	function formatInfo(value: { name: string } | { age: number }): string {
		if ("name" in value) {
			return `Name: ${value.name}`;
		} else {
			return `Age: ${value.age}`;
		}
	}

	// 함수 호출
	const info = formatInfo({ name: "Alice" });
	console.log(info); // "Name: Alice"

	const info1 = formatInfo({ age: 25 });
	console.log(info1);
}

{
	//   문제 6: 두 문자열을 합쳐서 출력하는 함수
	// 문제 설명: combineStrings 함수는 두 개의 문자열을 받아 합쳐서 반환하는 함수입니다. 두 문자열의 순서를 바꿀 수 있도록 하며, 적절한 타입을 지정하여 함수를 정의하고 호출해보세요.
	// 함수 정의
	const combineStrings = function combineStrings(s1: string, s2: string): string {
		return `${s1}${s2}`;
	};

	// 함수 호출
	const combined = combineStrings("Hello", "World");
	console.log(combined); // "HelloWorld"
}

{
	//   문제 7: 배열의 각 값을 제곱하여 새로운 배열을 반환하는 함수
	// 문제 설명: squareArray 함수는 숫자 배열을 받아 그 배열의 각 값에 대해 제곱을 계산하여 새로운 배열을 반환합니다.
	// 함수 정의
	const squareArray = function (number: number[]): number[] {
		const result = number.map((e) => e * e);
		return result;
	};

	// 함수 호출
	const result = squareArray([1, 2, 3, 4]);
	console.log(result); // [1, 4, 9, 16]
}

{
	//   문제 8: 문자열과 숫자가 주어졌을 때, 그 둘을 더하여 문자열로 반환하는 함수
	// 문제 설명: addStringAndNumber 함수는 문자열과 숫자를 인자로 받아 두 값을 더하여 문자열로 반환하는 함수입니다. 적절한 타입을 지정하여 함수를 정의하고 호출해보세요.
	// 함수 정의
	const addStringAndNumber = (value1: string, value2: number): string => `${value1}${value2}`;

	// 함수 호출
	const result = addStringAndNumber("The number is ", 10);
	console.log(result); // "The number is 10"
}

{
	//   문제 9: 타입이 서로 다른 두 값을 비교하는 함수
	// 문제 설명: compareValues 함수는 숫자와 문자열을 받아 두 값을 비교하여 결과를 출력하는 함수입니다. 숫자가 크면 "Number is larger", 문자열의 길이가 길면 "String is larger"를 반환하도록 하세요.
	// 함수 정의
	const compareValues = (value1: number, value2: string): string => {
		if (value1 > value2.length) {
			return "Number is larger";
		} else {
			return "String is larger";
		}
	};

	// 함수 호출
	const result = compareValues(10, "Hello");
	console.log(result); // "Number is larger"

	const result1 = compareValues(3, "Hello");
	console.log(result1);
}

{
	//   문제 10: 다중 조건을 처리하는 조건문 함수
	// 문제 설명: checkValue 함수는 숫자, 문자열, 불리언 값을 인자로 받습니다. 이 값이 숫자라면 "It's a number", 문자열이라면 "It's a string", 불리언이라면 "It's a boolean"을 반환하도록 하세요.
	// 함수 정의
	const checkValue = (value: number | string | boolean): string => {
		if (typeof value === "number") {
			return "It's a number";
		} else if (typeof value === "string") {
			return "It's a string";
		} else {
			return "It's a boolean";
		}
	};

	// 함수 호출
	const result = checkValue(true);
	console.log(result);

  const result1 = checkValue(1);
	console.log(result1);

  const result2 = checkValue("true");
	console.log(result2);
}
