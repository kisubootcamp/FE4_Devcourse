import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import { axiosInstance } from "../api/axiosInstance";

// axios.get
// axios.post
// axios.put
// axios.patch
// axios.delete
export default function AxiosBasic() {
    const [posts, setPosts] = useState([]);
    //const [loading, setLoading] = useState(true); 아래랑 용도 똑같음
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState("");

    const fetchPosts = async () => {
        try {
            const { data } = await axiosInstance.get("/posts");
            setPosts(data);
        } catch (error) {
            setError(error instanceof Error ? error.message : "Unknown Error");
        }
    };

    useEffect(() => {
        startTransition(() => {
            fetchPosts();
        });
    }, []);

    if (isPending) {
        <h1>loading..</h1>;
    }

    return (
        <>
            <h1>{JSON.stringify(posts, null, 2)}</h1>
        </>
    );
}
