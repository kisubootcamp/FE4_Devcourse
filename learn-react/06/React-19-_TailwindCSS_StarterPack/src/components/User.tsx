export default function User(props: {
  id: number;
  age: number;
  name: string;
  checkHandler?: () => void;
}) {
  console.log(props);
  return (
    <>
      <h1>{props.id}</h1>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      {props.checkHandler && <button onClick={props.checkHandler}>클릭</button>}
    </>
  );
}
