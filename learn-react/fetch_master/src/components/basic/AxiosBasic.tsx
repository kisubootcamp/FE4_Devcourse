import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import { axiosInstance } from "../../api/axiosInstance";

// axios.get
// axios.post
// axios.put
// axios.patch
// axios.delete
export default function AxiosBasic() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [isPending, startTransition] = useTransition();

	// const fetchPosts = async () => {
	// 	try {
	// 		const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
	// 		setPosts(data);
	// 	} catch (e) {
	// 		setError(e instanceof Error ? e.message : "Unknown Error");
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	const fetchPosts1 = async () => {
		try {
			// const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
			const { data } = await axiosInstance.get("/posts");
			setPosts(data);
		} catch (e) {
			setError(e instanceof Error ? e.message : "Unknown Error");
		}
	};

	useEffect(() => {
		// axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
		// 	// console.log(result); // axios는 data에 바로 사용자가 요청한 데이터를 포함시켜줘서 then메서드를 두번 사용할 필요가 없다
		// 	// console.log(result.data) // then 한번 더 안써도 이게 바로 우리가 원하는 데이터다.
		// 	setPosts(result.data);
		// });  // fetch보다 조금 더 간단하다

		// async await 방식
		// fetchPosts();

		startTransition(async () => {
			await fetchPosts1();
		});
	}, []);

	// if (loading) return <h1>Loading..</h1>;
	if (isPending) return <h1>Loading..</h1>;

	if (error) return <h1>Error: {error}</h1>;

	return (
		<>
			<pre>{JSON.stringify(posts, null, 2)}</pre>
		</>
	);
}
