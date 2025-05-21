import { useTransition } from "react";

export default function FetchCRUD() {
  const [isPending, transition] = useTransition();
  const getHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    // const data = await (await fetch("http://localhost:3001/posts")).json();
  };
  const postHandler = async () => {
    transition(async () => {
      try {
        const res = await fetch("http://localhost:3001/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: "3",
            title: "jaegeon",
            views: 100,
          }),
        });
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
        console.log(err instanceof Error && err.message);
      }
    });
  };
  const putHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "modify data",
          views: 500,
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
      console.log(err instanceof Error && err.message);
    }
  };
  const patchHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/1", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "patch modify data",
          views: 500,
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
      console.log(err instanceof Error && err.message);
    }
  };
  const deleteHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/3", {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
      console.log(err instanceof Error && err.message);
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
