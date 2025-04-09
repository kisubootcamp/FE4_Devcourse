{
	// 1.
	const printValue = (input: string | number) => console.log(input);

	printValue("Hello"); // "Hello" 출력
	printValue(42); // 42 출력
}

{
	// 2.
	const doubleOrLength = (input: string | number) => {
		if (typeof input == "string") return input.length;
		else return input * 2;
	};

	console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
	console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}

{
	// 3.
	const mergeObjects = (a: { name: string; age: number }, b: { jobTitle: string; salary: number }) => {
		return { ...a, ...b };
	};

	const person = { name: "Alice", age: 30 };
	const employee = { jobTitle: "Engineer", salary: 5000 };

	const mergedObject = mergeObjects(person, employee);
	console.log(mergedObject);
	// 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}

{
	// 4.
	const getFirstElement = (arr: (number | string | undefined)[]) => arr[0];

	console.log(getFirstElement([1, 2, 3])); // 1
	console.log(getFirstElement(["a", "b", "c"])); // "a"
	console.log(getFirstElement([])); // undefined
}

{
	// 5.
	const isEqual = (item1: string | number, item2: string | number) => item1 === item2;

	console.log(isEqual(10, 10)); // true
	console.log(isEqual("hello", "world")); // false
	console.log(isEqual(5, "5")); // false
}

{
	// 6.
}

{
	// 7.
	const maxValue = (item1: number | string, item2: number | string) => {
		if (typeof item1 === "number" && typeof item2 === "number") {
			return Math.max(item1, item2);
		} else if (item1 > item2) return item1;
		else return item2;
	};

	console.log(maxValue(10, 20)); // 20
	console.log(maxValue("apple", "banana")); // "banana"
	console.log(maxValue(30, 30)); // 30
	console.log(maxValue("cat", "dog")); // "dog"
}

{
	// 8.
	// 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
	function getValue(item: string): string;
	function getValue(item: number): string;
	function getValue(item: string | number) {
		return item.toString();
	}

	console.log(getValue(123)); // "123"
	console.log(getValue("abc")); // "abc"
}

{
	// 9.
}

{
	// 10.
	const getAge = (age: number | string) => {
		return Number(age);
	};

	console.log(getAge("25")); // 25
	console.log(getAge(30)); // 30
	console.log(getAge("abc")); // NaN
}

// 인터섹션은 공부 더 하겠습니다...
