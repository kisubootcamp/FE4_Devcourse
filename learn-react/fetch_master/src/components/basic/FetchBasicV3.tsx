import { useEffect, useState, useTransition } from "react";

// CRUD
// C Create - POST
// R Read - GET
// U Update - PUT/PATCH
// D Delete - DELETE
export default function FetchBasicV3() {
	// 가장 기본적인 API 통신 방법 -> useEffect

	// 데이터를 가져오겠다. (읽어오겠다)
	// 대부분 컴포넌트가 생성되자마자 데이터를 요청해서 가져오는 작업 수행하고 그걸 위해 useEffect를 사용
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState("");
	const [isPending, startTransition] = useTransition();

	const fetchPosts = async () => {
		try {
			const response = await fetch("https://jsonplaceholder.typicode.com/posts");
			if (!response.ok) throw new Error("Network response was not ok");
			const data = await response.json();
			setPosts(data);
		} catch (error: unknown) {
			setError(error instanceof Error ? error.message : "unknown Error");
		}
	};

	useEffect(() => {
		startTransition(async () => {
			await fetchPosts();
		});
	}, []); // 빈배열이니까 컴포넌트가 생성될 때 한번 실행

	if (isPending) {
		return <h1>Loading..</h1>;
	}

	if (error) {
		return <h1>Error: {error}</h1>;
	}
	return (
		<>
			<pre>{JSON.stringify(posts, null, 2)}</pre>
		</>
	);
}
