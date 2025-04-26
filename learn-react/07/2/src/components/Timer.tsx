import { useEffect, useState } from "react";

export default function Timer() {
	const [timer, setTimer] = useState(0);

	// 리렌더링이 발생할 때마다 setInterval이 막 중첩되는거
	// 따라서 딱 한번만 실행되어야 하는 함수는 useEffect를 사용한다.
	// setInterval(() => {
	// 	setTimer((timer) => timer + 1);
	// }, 1000)

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("timer");
      // setTimer(timer + 1);  // 이건 1만 되는데, 그 이유는 클로저 때문이다. setInterval가 등록되는 시점은 0이고, 계속해서 이 0의 값을 가져오기 때문에 0+1만 계속 실행한다. -> 콜백함수로 작성해야 한다.
			setTimer((timer) => timer + 1);
		}, 1000);

		return () => {
			clearInterval(interval); // 초기화하는 습관을 들여놔야 한다.
		};
	}, []);

	return (
		<>
			<h1>Timer : {timer}</h1>
		</>
	);
}
