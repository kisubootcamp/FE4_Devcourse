import { useEffect, useState } from "react";

// CRUD
// C Create - Post
// R Read - GET
// U Update - PUT/PATCH
// D Delete - DELETE

export default function FetchBasicV2() {
	// 데이터를 가져오겠다. (읽어오겠다)

	const [posts, setPosts] = useState([]); // 요청한 데이터를 저장할 상태
	const [loading, setLoading] = useState(true); // 로딩 중 상태
	const [error, setError] = useState(""); // 에러 처리 상태

	const fetchPosts = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			if (!response.ok) throw new Error("Network response was not ok");
			const data = await response.json();
			setPosts(data);
		} catch (error: unknown) {
			setError(error instanceof Error ? error.message : "Unknown Error");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
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
