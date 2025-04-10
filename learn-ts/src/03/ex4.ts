{
	// 1.
	const processInput = (input: number | string | boolean) => {
		if (typeof input === "number") return input * input;
		else if (typeof input === "string") return input.toUpperCase();
		else if (input === true) return "YES";
		else return "NO";
	};

	// 테스트 케이스
	console.log(processInput("hello")); // "HELLO"
	console.log(processInput(5)); // 25
	console.log(processInput(true)); // "YES"
}

{
	// 2.
	const getFirstCharacter = (input: string | number) => {
		if (typeof input === "number") {
			return Number(input.toString().charAt(0));
		} else return input.charAt(0);
	};

	// 테스트 케이스
	console.log(getFirstCharacter("hello")); // "h"
	console.log(getFirstCharacter(12345)); // 1
}

{
	// 3.
}

{
	// 4.
	const getIdValue = (obj: { id: number | string }) => {
		if (typeof obj.id === "number") return obj.id;
		else return obj.id.length;
	};
}

{
	// 5.
	const formatDate = (date: string | Date) => {
		if (typeof date === "string") return date;
		else return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
	};

	// 테스트 케이스
	console.log(formatDate("2024-11-19")); // "2024-11-19"
	console.log(formatDate(new Date(2024, 10, 19))); // "11/19/2024"
}

{
	// 6.
	const convert = (input: string | number) => {
		if (typeof input === "number") return String(input);
		else return Number(input);
	};

	// 테스트 케이스
	console.log(convert(123)); // "123"
	console.log(convert("456")); // 456
	console.log(convert("abc")); // NaN
}

{
	// 7.
}

{
	// 8.
	const compareValues = (a: number | string, b: number | string) => {
		if (typeof a === "number" && typeof b === "number") {
			if (a >= b) return true;
			else return false;
		} else if (typeof a === "string" && typeof b === "string") {
			if (a.length >= b.length) return true;
			else return false;
		}
	};

	// 테스트 케이스
	console.log(compareValues(10, 20)); // false
	console.log(compareValues("apple", "banana")); // false
	console.log(compareValues("grape", "apple")); // true
}

{
	// 9.
	const checkEvenOdd = (input: string | number) => {
		if (typeof input === "number") {
			if (input % 2 === 0) return "Even";
			else return "Odd";
		} else {
			if (input.length % 2 === 0) return "Even Length";
			else return "Odd Length";
		}
	};

	// 테스트 케이스
	console.log(checkEvenOdd(4)); // "Even"
	console.log(checkEvenOdd(7)); // "Odd"
	console.log(checkEvenOdd("hello")); // "Odd Length"
	console.log(checkEvenOdd("code")); // "Even Length"
}

{
	// 10.
}

// 인터섹션은 나중에 공부 더 해오겠습니다...
