import { useEffect, useState } from "react";

// CRUD
// Create - Post
// Read - Get
// Update - Put/Patch
// Delete - Delete
export default function FetchBasic() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // 컴포넌트가 마운트되자마자 데이터를 가져오겠다.
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts") //
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = response.json();
                console.log(response); // 그냥 보려고 출력함
                console.log(data); // response.json()을 한번밖에 못해서 담아줬다..
                return data;
            })
            .then((result) => {
                console.log(result);
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
            <h1>{JSON.stringify(posts, null, 2)}</h1>
        </>
    );
}
