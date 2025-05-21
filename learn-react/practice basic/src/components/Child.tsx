export default function Child({
  String,
  Number,
  tags,
  Array,
  isLoggedin,
  Button,
  value,
  style,
}: Child) {
  return (
    <>
      <h1>{String}</h1>
      <h1>{Number}</h1>
      <h1>{JSON.stringify(tags, null, 2)}</h1>
      <h1>{JSON.stringify(Array, null, 2)}</h1>
      <h1>{isLoggedin.toString()}</h1>
      <button onClick={(e) => Button(e, "메세지 출력")}>클릭</button>
      <h1>{JSON.stringify(value)}</h1>
      <h1 style={style}>Child Component</h1>
    </>
  );
}
