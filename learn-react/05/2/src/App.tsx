// 조건부 렌더링
// 조건문을 활용해서 조건 렌더링을 수행하는 기법

import User from "./Components/User";

//import LoggedIn from "./Components/LoggedIn";

// import LoggedIn from "./Components/LoggedIn";
// import NotLoggedIn from "./Components/NotLoggedIn";

// 조건에 따라서 컴포넌트를 렌더링하는 기법
export default function App() {
  //const isLogin = false;

  // if문 사용
  // if (isLogin) {
  //   return <LoggedIn />;
  // }
  // return <NotLoggedIn />;

  // 삼항 연산자 사용
  // return <>{isLogin ? <h1>User Is Login!</h1> : <h1>User Is Not Login!</h1>}</>;

  // 논리 && 연산자
  // return (
  //   <>
  //     {isLogin && <h1>User Is Login!</h1>}
  //     {!isLogin && <h1>User Is Not Login!</h1>}
  //   </>
  // );

  // 반복 렌더링
  // 반복문을 활용해서 반복 렌더링을 수행하는 기법

  // for 문 사용 ( 잘 사용하지 x )
  /*
    const items = ["apple", "banana", "orange"];
    const renderItems = [];
    for (let i = 0; i < items.length; i++) {
      renderItems.push(<li>{items[i]}</li>);
    }
    return (
      <>
        <ul>{renderItems}</ul>
      </>
    );
  */

  // [].map()
  // 반복 렌더링을 돌 때는 key가 필요함 (고유한 값)
  const items = ["apple", "banana", "orange"];
  const users = [
    {
      id: 1,
      name: "John",
      age: 20,
    },
    {
      id: 2,
      name: "Anna",
      age: 22,
    },
  ];
  // return (
  //   <>
  //     <ul>
  //       {users.map((user) => (
  //         <li key={user.id}>
  //           {user.name} - {user.age}
  //         </li>
  //       ))}
  //     </ul>
  //     <ul>
  //       {/* (value, index) 여기서 index는 key 값 설정을 위한건가??? */}
  //       {items.map((value, index) => (
  //         <li key={index}>{value}</li>
  //       ))}
  //     </ul>
  //   </>
  // );

  return (
    <>
      <ul>
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      <ul>
        {items.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}
