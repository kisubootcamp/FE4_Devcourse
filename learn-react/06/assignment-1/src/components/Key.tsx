import { useState } from "react";

export default function Key() {
	const [users, setUsers] = useState([
		{
			id: 1,
			name: "jo",
		},
		{
			id: 2,
			name: "na",
		},
		{
			id: 3,
			name: "bab",
		},
	]);
	const clickHandler = () => {
		setUsers((users) => [{ id: users.length + 1, name: "ssss" }, ...users]);
	};
	return (
		<>
			<h1>Key Component</h1>
			{users &&
				users.map((user, index) => (
					<input key={user.id} className="border border-black block mb-4" placeholder={user.name} />
				))}

			<button onClick={clickHandler}>추가</button>
		</>
	);
}
