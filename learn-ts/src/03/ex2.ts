{
	// 1.
	// 함수 정의
	const sumAllNumbers = (...numArr: number[][]) => {
		let resultArr: number[] = [];
		numArr.forEach((a) => {
			resultArr.push(a.reduce((init, item) => init + item, 0));
		});
		return resultArr;
	};

	// 함수 호출
	const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
	console.log(result); // [3, 12, 13]
}

{
	// 2.
	// 함수 정의
	const doubleValue = (item: number | string) => {
		if (typeof item === "number") return item * 2;
		else return item.length * 2;
	};

	// 함수 호출
	const result1 = doubleValue(5);
	const result2 = doubleValue("hello");
	console.log(result1); // 10
	console.log(result2); // 10
}

{
	// 3.
	// 함수 정의
	const multiplyArrays = (arr1: number[], arr2: number[]) => {
		let resultArr = [];
		let resultArrLength = Math.min(arr1.length, arr2.length) - 1;
		for (let i = 0; i <= resultArrLength; i++) {
			resultArr.push(arr1[i] * arr2[i]);
		}
		return resultArr;
	};

	// 함수 호출
	const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
	console.log(result); // [4, 10, 18]
}

{
	// 4. ⭐
	// 함수 정의
	const intersection = (arr1: number[], arr2: number[]) => {
		const resultArr = arr1.filter((item) => arr2.includes(item));
		return resultArr;
	};

	// 함수 호출
	const result = intersection([1, 2, 3], [2, 3, 4]);
	console.log(result); // [2, 3]
}

{
	// 5.
	// 함수 정의
	const formatInfo = (item: { name: string; age?: number } | { age: number; name?: string }) => {
		if (item.name) return `Name: ${item.name}`;
		else if (item.age) return `Age: ${item.age}`;
	};

	// 함수 호출
	const info = formatInfo({ name: "Alice" });
	console.log(info); // "Name: Alice"
}

{
	// 6.
	// 함수 정의
	const combineStrings = (str1: string, str2: string) => str1 + str2;

	// 함수 호출
	const combined = combineStrings("Hello", "World");
	console.log(combined); // "HelloWorld"
}

{
	// 7.
	// 함수 정의
	const squareArray = (arr: number[]) => {
		let resultArr = [];
		for (let i = 0; i <= arr.length - 1; i++) {
			resultArr.push(arr[i] * arr[i]);
		}
		return resultArr;
	};

	// 함수 호출
	const result = squareArray([1, 2, 3, 4]);
	console.log(result); // [1, 4, 9, 16]
}

{
	// 8.
	// 함수 정의
	const addStringAndNumber = (str: string, num: number): string => {
		return `${str}${num}`;
	};

	// 함수 호출
	const result = addStringAndNumber("The number is ", 10);
	console.log(result); // "The number is 10"
}

{
	// 9.
	// 함수 정의
	const compareValues = (num: number, str: string) => {
		if (num > str.length) return "Number is larger";
		else if (num < str.length) return "String is larger";
	};

	// 함수 호출
	const result = compareValues(10, "Hello");
	console.log(result); // "Number is larger"
}

{
	// 10.
	// 함수 정의
	const checkValue = (input: number | string | boolean) => `It's a ${typeof input}`;

	// 함수 호출
	const result = checkValue(true);
	console.log(result);
}
