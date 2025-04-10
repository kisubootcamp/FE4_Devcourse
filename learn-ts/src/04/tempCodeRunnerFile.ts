	function printValue(value: number | null) {
		if (typeof value === "number") console.log(value.toFixed(2));
		// console.log(value?.toFixed(2));
    console.log(value!.toFixed(2)); // 절대로 null이 아닐거라고 보장시켜주는 연산자 !
	}

  printValue(null); // ? 사용했을 때는 undefined