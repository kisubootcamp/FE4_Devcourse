import { useEffect, useState } from "react";

// CRUD
// Create - Post
// Read - Get
// Update - Put/Patch
// Delete - Delete
export default function FetchBasic() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setPosts(data);
        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : "unknown Error");
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
            <h1>{JSON.stringify(posts, null, 2)}</h1>
        </>
    );
}
