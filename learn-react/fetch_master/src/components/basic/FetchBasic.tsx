import { useEffect, useState } from "react";

// CRUD
// C Create - Post
// R Read - GET
// U Update - PUT/PATCH
// D Delete - DELETE

export default function FetchBasic() {
	// 데이터를 가져오겠다. (읽어오겠다)

	const [posts, setPosts] = useState([]); // 요청한 데이터를 저장할 상태
	const [loading, setLoading] = useState(true); // 로딩 중 상태
	const [error, setError] = useState(""); // 에러 처리 상태

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts") //
			.then((response) => {
				if (!response.ok) throw new Error("Network response was not ok");
				return response.json();
			})
			.then((result) => {
				setPosts(result);
			})
			.catch((error: Error) => {
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
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
