// props 객체
export default function User(props: { name: string; age: number }) {
  console.log(props);
  return (
    <h1>
      User: {props.name} / {props.age}
    </h1>
  );
}
