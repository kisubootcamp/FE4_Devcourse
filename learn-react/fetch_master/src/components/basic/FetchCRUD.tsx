import { useTransition } from "react";

export default function FetchCRUD() {
  const [isPending, startTransition] = useTransition();

  const getHandler = async () => {
    // try {
    //   const res = await fetch("http://localhost:3001/posts", {
    //     method: "Post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   if (!res.ok) throw new Error("Network response was not ok");
    //   const data = await res.json();
    //   console.log(data);
    // } catch (e) {
    //   console.log(e);
    // }

    const data = await (await fetch("http://localhost:3001/posts")).json();
    console.log(data); // error response를 처리할 수 없는 코드이지만 에러가 없음을 확신할 수 있다면 이렇게 줄일 수 있다.
  };
  const postHandler = async () => {
    startTransition(async () => {
      try {
        const res = await fetch("http://localhost:3001/posts", {
          method: "POST",
          headers: {
            "Conctent-Type": "application/json",
          },
          body: JSON.stringify({
            id: "3",
            title: "epid",
            views: 100,
          }),
        });
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        console.log(data);

        // 댓글 API - GET
        // 대부분은 POSTAPI로 작성한 것을 돌려줘야 함
      } catch (e) {
        console.log(e);
        console.log(e instanceof Error && e.message);
      }
    });
  };
  const putHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts", {
        method: "PUT",
        headers: {
          "Conctent-Type": "application/json",
        },
        body: JSON.stringify({
          title: "modify data",
          views: 500,
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data);

      // 댓글 API - GET
      // 대부분은 POSTAPI로 작성한 것을 돌려줘야 함
    } catch (e) {
      console.log(e);
      console.log(e instanceof Error && e.message);
    }
  };
  const patchHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/1", {
        method: "PATCH",
        headers: {
          "Conctent-Type": "application/json",
        },
        body: JSON.stringify({
          id: "5",
          title: "Patch modify data",
          views: 200,
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data);

      // 댓글 API - GET
      // 대부분은 POSTAPI로 작성한 것을 돌려줘야 함
    } catch (e) {
      console.log(e);
      console.log(e instanceof Error && e.message);
    }
  };
  const deleteHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts", {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    // const data = await (await fetch("http://localhost:3001/posts")).json();
    // console.log(data); // error response를 처리할 수 없는 코드이지만 에러가 없음을 확신할 수 있다면 이렇게 줄일 수
  };
  return (
    <>
      <form className="flex gap-4">
        <button type="button" onClick={getHandler}>
          GET
        </button>
        <button
          type="button"
          disabled={isPending}
          className="disabled:text-gray-400"
          onClick={postHandler}
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
