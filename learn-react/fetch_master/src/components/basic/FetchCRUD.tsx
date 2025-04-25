import { useTransition } from "react";

export default function FetchCRUD() {
  const [isPending, startTransition] = useTransition();
  const getHandler = async () => {
    //try {
    //   const res = await fetch("http://localhost:3001/posts", {
    //     method: "GET", //기본값이므로 생략가능
    //   });
    //   if (!res.ok) throw new Error("Network response was not ok");
    //   const data = await res.json();
    //   console.log(data);
    // } catch (e) {
    //   console.log(e);
    // }
    const data = await (await fetch("http://localhost:3001/posts")).json();
    console.log(data); //에러 처리 못하므로 권장되는 방법은 아니지만 매우 간결함
  };
  const postHandler = async () => {
    startTransition(async () => {
      try {
        const res = await fetch("http://localhost:3001/posts", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            id: "4",
            title: "anna",
            views: 100,
          }),
        });
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        console.log(data);
      } catch (e) {
        console.log(e);
        console.log(e instanceof Error && e.message);
      }
    });
  };

  //전체 데이터 업데이트(수정하고싶은 부분 수정후 전체 데이터 덮어쓰기)
  //postHandler와 내용 거의 같음
  const putHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/1", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: "modify data",
          views: 500,
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
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
      const res = await fetch("http://localhost:3001/posts/1", {
        //id는 url 맨 뒤에 포함시켰음
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: "patch modify data",
          views: 500,
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
      console.log(e instanceof Error && e.message);
    }
  };
  const deleteHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/4", {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
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
