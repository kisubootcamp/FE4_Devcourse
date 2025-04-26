
	function add<T>(a: T, b: T): string | number {
		if (typeof a == "number" && typeof b == "number") {
			return a + b;
		} else {
			return `${a}${b}`;
		}
	}

	console.log(add(2, 3)); // 5
	console.log(add(true, false));