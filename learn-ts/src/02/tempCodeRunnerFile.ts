	let items1: ( // 소괄호를 적지 않으면 (객체) 또는 (string number요소가 담긴 중첩 배열)이 되는 것임.
		| {
				id: number;
				name: string;
				price: number;
		  }
		| (string | number)[]
	)[] = [{ id: 1, name: "Item1", price: 100 }, { id: 2, name: "Item2", price: 200 }, ["discount", 10]];
	console.log(items1[0]);
  // console.log(items1[0].name); // 객체일수도 있고 배열일수도 있는데 name으로 접근할 수 없다. -> 나중에 배울건데 검증 후 사용해야 됨.

  if ("name" in items1[0]) {
    console.log(items1[0].name);
  }