import { useTransition } from "react";

export default function FetchCRUD() {
    const [isPending, startTransition] = useTransition();

    const getHandler = async () => {
        try {
            const response = await fetch("http://localhost:3001/posts");
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }

        /* 어차피 이거 에러나면 우리 서비스 끝난다도르 */
        // const data= await (await fetch("http://localhost:3001/posts")).json();
        // console.log(data);
    };
    const postHandler = async () => {
        startTransition(async () => {
            try {
                const response = await fetch("http://localhost:3001/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: "3",
                        title: "Hayoung",
                        views: 100,
                    }),
                });
                if (!response.ok)
                    throw new Error("Network response was not ok");
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error);
                console.log(error instanceof Error && error.message); // 자세한 에러 메세지 출력
            }
        });
    };
    const putHandler = async () => {
        try {
            const response = await fetch("http://localhost:3001/posts/1", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: "JaeGyoung",
                }),
            });
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    const patchHandler = async () => {
        try {
            const response = await fetch("http://localhost:3001/posts/1", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: "1",
                    title: "JaeGyoung",
                    views: 500,
                }),
            });
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    const deleteHandler = async () => {
        try {
            const response = await fetch("http://localhost:3001/posts/4", {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form className="flex gap-4">
                <button type="button" onClick={getHandler}>
                    GET
                </button>
                <button
                    type="button"
                    className="disabled:text-gray-400"
                    onClick={postHandler}
                    disabled={isPending}
                >
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
