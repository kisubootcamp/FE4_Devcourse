import User from "./components/User";
// 조건부 렌더링
// 조건문을 활용해서 조건 렌더링을 수행하는 기법
// 1. if
// 2. 삼항 연산자
// 3. 논리 && 연산자
// 3.1 expr1 && expr2 -> true

// 반복 렌더링
// 반복문을 활용해서 반복 렌더링을 수행하는 기법
// [].map()
export default function App() {
  // const renderItems = [];
  const items = ["apple", "banana", "orange", "orange"];
  const users = [
    {
      id: 1,
      name: "John",
      age: 20,
    },
    {
      id: 2,
      name: "Sucoding",
      age: 30,
    },
  ];

  // for (let i = 0; i < items.length; i++) {
  //   renderItems.push(<li>{items[i]}</li>);
  // }

  return (
    <>
      <ul>
        {/* {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))} */}
        {users.map((user) => (
          // key 속성은 컴포넌트에 전달되지 않음
          <User key={user.id} {...user} />
        ))}
      </ul>
      {/* <ul>{renderItems}</ul> */}
      <ul>
        {items.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}
