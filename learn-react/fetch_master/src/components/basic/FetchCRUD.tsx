import { useTransition } from "react";

export default function FetchCRUD() {
	const [isPending, startTransition] = useTransition();

	const getHandler = async () => {
		try {
			const res = await fetch(
				"http://localhost:3001/posts"
				// , {
				//method: "GET", // 원래는 이렇게 method를 GET으로 요청되고 있는건데 이게 디폴트라 일반적으로 쓰지 않는 것.
				//}
			);
			if (!res.ok) throw new Error("Network response was not ok");
			const data = await res.json();
			console.log(data);
		} catch (e) {
			console.log(e);
		}

		// 원래는 위와 같이 작성하는게 맞는데
		// 절대로 에러가 발생하지 않는게 확신이 드는 그런 API가 있다
		// 그런경우 아래와 같이 극악으로 간단히 적는 방법이 있다
		// const data = await (await fetch("http://localhost:3001/posts")).json();
		// console.log(data);
		// 하지만 절대로라는건 없기 때문에 이 방법은 실무에서 추천하지 않는다.
		// 간단히 확인할때 사용 정도
	};

	// 새로운 데이터 등록할 때
	const postHandler = async () => {
		// try {
		//   const res = await fetch("http://localhost:3001/posts", {
		//     method: "POST", //대문자로 적어야 됨
		//     headers: {
		//       "Content-Type": "application/json", // Content의 타입은 json이다. 한글자라도 오타나지 않도록 주의
		//     },
		//     body: JSON.stringify({
		//       id: "4",
		//       title: "anna",
		//       views: 10,
		//     }),
		//   });
		//   // console.log(res); // 똑같이 response 객체를 반환함
		//   if (!res.ok) throw new Error("Network response was not ok");
		//   const data = await res.json();
		//   console.log(data);
		// } catch (e) {
		//   console.log(e);
		//   console.log(e instanceof Error && e.message);
		// }
		startTransition(async () => {
			try {
				const res = await fetch("http://localhost:3001/posts", {
					method: "POST", //대문자로 적어야 됨
					headers: {
						"Content-Type": "application/json", // Content의 타입은 json이다. 한글자라도 오타나지 않도록 주의
					},
					body: JSON.stringify({
						id: "4",
						title: "anna",
						views: 10,
					}),
				});
				// console.log(res); // 똑같이 response 객체를 반환함
				if (!res.ok) throw new Error("Network response was not ok");
				const data = await res.json();
				console.log(data);
			} catch (e) {
				console.log(e);
				console.log(e instanceof Error && e.message);
			}
		});
	};

	// 전체 데이터를 업데이트 할 때 사용하는 PUT
	const putHandler = async () => {
		try {
			const res = await fetch("http://localhost:3001/posts/1", {
				// id가 1번인 posts 데이터를 수정하겠다
				method: "PUT", //대문자로 적어야 됨
				headers: {
					"Content-Type": "application/json", // Content의 타입은 json이다. 한글자라도 오타나지 않도록 주의
				},
				body: JSON.stringify({
					title: "modify data",
					views: 500,
				}),
			});
			if (!res.ok) throw new Error("Network response was not ok");
			const data = await res.json();
			console.log(data);
		} catch (e) {
			console.log(e);
			console.log(e instanceof Error && e.message);
		}
	};

	// 일부분의 데이터를 업데이트할 때 사용하는 PATCH
	// 고유한 id 값을 제외하더라도 일부분의 데이터를 업데이트하겠다.
	const patchHandler = async () => {
		try {
			const res = await fetch("http://localhost:3001/posts/1", {
				// id가 1번인 posts 데이터를 수정하겠다
				method: "PATCH", //대문자로 적어야 됨
				headers: {
					"Content-Type": "application/json", // Content의 타입은 json이다. 한글자라도 오타나지 않도록 주의
				},
				body: JSON.stringify({
					title: "patch modify data",
					views: 500,
				}),
			});
			if (!res.ok) throw new Error("Network response was not ok");
			const data = await res.json();
			console.log(data);
		} catch (e) {
			console.log(e);
			console.log(e instanceof Error && e.message);
		}
	};

	// 데이터 삭제할 때 사용하는 DELETE
	const deleteHandler = async () => {
		try {
			const res = await fetch("http://localhost:3001/posts/4", {
				// 어떤 데이터를 삭제할건지 알아야 하니까 -> 4번 데이터를 지우겠다
				method: "DELETE",
			});
			if (!res.ok) throw new Error("Network response was not ok");
			const data = await res.json();
			console.log(data);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<form className="flex gap-4">
				<button type="button" onClick={getHandler}>
					GET
				</button>
				<button type="button" className="disabled:text-gray-300" onClick={postHandler} disabled={isPending}>
					POST
				</button>
				<button type="button" onClick={putHandler}>
					PUT
				</button>
				<button type="button" onClick={patchHandler}>
					PATCH
				</button>
				<button type="button" onClick={deleteHandler}>
					DELETE
				</button>
			</form>
			{isPending && <h1>잠시만 기다려주세요...</h1>}
		</>
	);
}
