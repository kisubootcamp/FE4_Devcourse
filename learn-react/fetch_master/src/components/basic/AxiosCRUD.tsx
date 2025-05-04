import { useTransition } from "react";
import { axiosInstance } from "../../api/axiosInstance";

export default function AxiosCRUD() {
  const [isPending, startTransition] = useTransition();
  const getHandler = async () => {
    try {
      const { data } = await axiosInstance.get("/posts");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    // const data = await (await fetch("http://localhost:3001/posts")).json();
    // console.log(data);
    // 오류가 날 가능성이 없다는 전제하에 쓸 수 있는 방법이다.
    // 가능하면 사용을 피하는 것이 좋다.
  };
  const postHandler = async () => {
    startTransition(async () => {
      try {
        const { data } = await axiosInstance.post("/posts", {
          id: "4",
          title: "sucoding",
          views: 100,
        });
        console.log(data);
      } catch (e) {
        console.log(e);
        console.log(e instanceof Error && e.message);
      }
    });
  };
  const putHandler = async () => {
    try {
      const { data } = await axiosInstance.put("/posts/1", {
        title: "modify data",
        views: 500,
      });
      console.log(data);
    } catch (e) {
      console.log(e);
      console.log(e instanceof Error && e.message);
    }
  };
  const patchHandler = async () => {
    try {
      const { data } = await axiosInstance.patch("/posts/1", {
        title: "patch modify data",
        views: 500,
      });
      console.log(data);
    } catch (e) {
      console.log(e);
      console.log(e instanceof Error && e.message);
    }
  };
  const deleteHandler = async () => {
    try {
      const { data } = await axiosInstance.delete("/posts/4");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form className="flex gap-4">
        <button type="button" onClick={getHandler}>
          GET
        </button>
        <button
          className="disabled:text-gray-400"
          disabled={isPending}
          type="button"
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
