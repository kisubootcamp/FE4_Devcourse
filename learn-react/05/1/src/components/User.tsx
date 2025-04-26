// export default function User({ user }: { user: { id: number; name: string; age: number } }) {
// export default function User({ id, name, age }: { id: number; name: string; age: number }) {
export default function User({
	id,
	name,
	age,
	clickHandler,
}: {
	id: number;
	name: string;
	age: number;
	clickHandler?: () => void;
}) {
	return (
		<>
			{/* <pre>{JSON.stringify(user, null, 2)}</pre> pre 태그 쓰면 좀 더 예쁘게 나온다. */}
			{/* <h1>{id}</h1>
			<h1>{name}</h1>
			<h1>{age}</h1> */}
			<h1>{id}</h1>
			<h1>{name}</h1>
			<h1>{age}</h1>
			{clickHandler && <button onClick={clickHandler}>클릭</button>}

      {/* if 문으로 써도 되겠지만 그럼 코드가 반복되는 부분이 생기기 때문에
      
      if (clickHandler) {
      return  ()
      
      }

      return ()
      
      &&연산자를 써야겠다 라고 생각하면 좋겠지 */}
		</>
	);
}
