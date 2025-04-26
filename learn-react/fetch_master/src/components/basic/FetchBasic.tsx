import { useEffect, useState } from "react";

// CRUD
// C Create - POST
// R Read - GET
// U Update - PUT/PATCH
// D Delete - DELETE
export default function FetchBasic() {
	// 가장 기본적인 API 통신 방법 -> useEffect

	// 데이터를 가져오겠다. (읽어오겠다)
	// 대부분 컴포넌트가 생성되자마자 데이터를 요청해서 가져오는 작업 수행하고 그걸 위해 useEffect를 사용
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				if (!response.ok) throw new Error("Network response was not ok");
				return response.json();
			})
			.then((result) => {
				// console.log(result);
				setPosts(result);
			})
			.catch((error: Error) => {
				console.log(error.message);
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []); // 빈배열이니까 컴포넌트가 생성될 때 한번 실행

	if (loading) {
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
