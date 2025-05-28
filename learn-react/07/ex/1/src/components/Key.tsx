import { useState } from "react";

export default function Key() {
	const [users, setUsers] = useState([
		{
			id: 1,
			name: "John",
		},
		{
			id: 2,
			name: "Mike",
		},
		{
			id: 3,
			name: "Anna",
		},
	]);

	const clickHandler = () => {
		setUsers((users) => [{ id: users.length + 1, name: "sucoding" }, ...users]);
	};

	return (
		<>
			<h1>Key Component</h1>
			{users &&
				users.map((user) => (
					<input
						key={user.id}
						className="border border-black block mb-2"
						placeholder={user.name}
					/>
				))}
			<button onClick={clickHandler}>추가</button>
		</>
	);
}
