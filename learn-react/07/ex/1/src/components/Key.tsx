import { useState } from "react";

export default function Key() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "john",
    },
    {
      id: 2,
      name: "mike",
    },
    {
      id: 3,
      name: "anna",
    },
  ]);

  const clickHandler = () => {
    setUsers((users) => [{ id: users.length + 1, name: "sucoding" }, ...users]);
  };
  return (
    <>
      <h1>Key Component</h1>
      {users &&
        users.map((user, index) => (
          <input key={index} className="border border-black block mb-4" placeholder={user.name} />
        ))}

      <button onClick={clickHandler}>추가</button>
    </>
  );
}
