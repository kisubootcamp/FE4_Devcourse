import { useTransition } from "react";
import { axiosLocalInstance } from "../../api/axiosInstance";

export default function AxiosCRUD() {
  const [isPending, startTransition] = useTransition();
  const getHandler = async () => {
    try {
      const { data } = await axiosLocalInstance.get("/posts");
      console.log(data);
    } catch (e) {
      console.log(e instanceof Error && e.message);
    }
    // const data = await (await fetch("http://localhost:3001/posts")).json();
    // console.log(data); //에러 처리 못하므로 권장되는 방법은 아니지만 매우 간결함
  };
  const postHandler = async () => {
    startTransition(async () => {
      try {
        const { data } = await axiosLocalInstance.post("/posts", {
          id: "5",
          title: "superman",
          views: 100,
        });
        console.log(data);
      } catch (e) {
        console.log(e instanceof Error && e.message);
      }
    });
  };

  //전체 데이터 업데이트(수정하고싶은 부분 수정후 전체 데이터 덮어쓰기)
  //postHandler와 내용 거의 같음
  const putHandler = async () => {
    try {
      const { data } = await axiosLocalInstance.put("/posts/1", {
        title: "change data",
        views: 500,
      });
      console.log(data);
    } catch (e) {
      console.log(e);
      console.log(e instanceof Error && e.message);
    }
  };
  //일부데이터 업데이트
  //일부 데이터 수정후 일부만 업데이트
  const patchHandler = async () => {
    try {
      const { data } = await axiosLocalInstance.put("/posts/1", {
        title: "change data",
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
      const { data } = await axiosLocalInstance.delete("/posts/5");
      console.log(data);
    } catch (e) {
      console.log(e instanceof Error && e.message);
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
          className="disabled:text-gray-400" //로딩중이면 비활성화&회색
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
      {isPending && <h1>잠시만 기다려주세요..</h1>}
    </>
  );
}
//npm run db_delay하면 2초정도 지연됨
