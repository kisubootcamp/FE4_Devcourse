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