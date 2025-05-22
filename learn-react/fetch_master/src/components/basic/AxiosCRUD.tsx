import { useTransition } from "react";
import { axiosLocalInstance } from "../../api/axiosInstance";

export default function AxiosCRUD() {
	const [isPending, startTransition] = useTransition();

	const getHandler = async () => {
		try {
			// const { data, status, statusText } = await axiosLocalInstance.get("/posts");
			const { data } = await axiosLocalInstance.get("/posts");
			// console.log(status, statusText, data);
			console.log(data);
		} catch (e) {
			console.log(e instanceof Error && e.message);
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
		try {
			const { data } = await axiosLocalInstance.post("/posts", {
				id: "4",
				title: "anna",
				views: 10,
			});
			console.log(data);
		} catch (e) {
			console.log(e instanceof Error && e.message);
		}
	};

	// 전체 데이터를 업데이트 할 때 사용하는 PUT
	const putHandler = async () => {
		try {
			const { data } = await axiosLocalInstance.put("/posts/1", {
				title: "modify data",
				views: 500,
			});
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
			const { data } = await axiosLocalInstance.patch("/posts/1", {
				title: "patch data",
				views: 500,
			});
			console.log(data);
		} catch (e) {
			console.log(e);
			console.log(e instanceof Error && e.message);
		}
	};

	// 데이터 삭제할 때 사용하는 DELETE
	const deleteHandler = async () => {
		try {
			const { data } = await axiosLocalInstance.delete("/posts/5");
			console.log(data);
		} catch (e) {
			console.log(e instanceof Error && e.message);
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
