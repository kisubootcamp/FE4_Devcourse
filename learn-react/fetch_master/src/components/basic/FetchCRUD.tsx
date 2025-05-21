import { useTransition } from 'react';

export default function FetchCRUD() {
  const [isPending, startTransition] = useTransition();
  const getHandler = async () => {
    // try {
    //   const res = await fetch('http://localhost:3001/posts');
    //   if (!res.ok) throw new Error('Network response was not ok');
    //   const data = await res.json();
    //   console.log(data);
    // } catch (e) {
    //   console.log(e);
    // }
    const data = await (await fetch('http://localhost:3001/posts')).json();
    console.log(data);
  };
  const postHandler = async () => {
    startTransition(async () => {
      try {
        const res = await fetch('http://localhost:3001/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: '4', title: 'anna', views: 100 }),
        });
        console.log(res);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        console.log(data);
      } catch (e) {
        console.log(e);
        console.log(e instanceof Error && e.message);
      }
    });
  };
  const putHandler = async () => {
    try {
      const res = await fetch('http://localhost:3001/posts/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: 'modify data', views: 500 }),
      });
      console.log(res);
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
      console.log(e instanceof Error && e.message);
    }
  };
  const patchHandler = async () => {
    try {
      const res = await fetch('http://localhost:3001/posts/1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: 'patch modify data', views: 500 }),
      });
      console.log(res);
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
      console.log(e instanceof Error && e.message);
    }
  };
  const deleteHandler = async () => {
    try {
      const res = await fetch('http://localhost:3001/posts/4', {
        method: 'DELETE',
      });
      console.log(res);
      if (!res.ok) throw new Error('Network response was not ok');
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
      {isPending && <h1>please wait....</h1>}
    </>
  );
}
