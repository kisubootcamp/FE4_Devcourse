/*
  export default function User({user}: {user: {id: number; name: string; age: number}}) {
    return (
      <>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </>
    );
  }
*/

/*
  export default function User({id, name, age}: {id: number; name: string; age: number}) {
    return (
      <>
        <h1>{id}</h1>
        <h1>{name}</h1>
        <h1>{age}</h1>
      </>
    );
  }
*/

// 타입 검사할 때, props를 optional property를 사용한 것처럼 선택적으로 받아서 사용 가능
export default function User({
  id,
  age,
  clickHandler,
}: {
  id: number;
  age: number;
  clickHandler: () => void;
}) {
  return (
    <>
      <h1>{id}</h1>
      <h1>{age}</h1>
      <button onClick={clickHandler}>click</button>
    </>
  );
}
