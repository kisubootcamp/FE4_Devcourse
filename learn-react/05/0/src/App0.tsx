import User from './components/User';
// import LoggedIn from './components/LoggedIn';
// import NotLoggedIn from './components/NotLoggedIn';
// 조건부 랜더링
//  조건에 따라서 컴포넌트를 렌더링하는 기법

export default function App() {
  const items = ['apple', 'banana', 'orange', 'orange'];
  const users = [
    {
      id: 1,
      name: 'John',
      age: 20,
    },
    {
      id: 2,
      name: 'Sucoding',
      age: 30,
    },
  ];
  return (
    <>
      <ul>
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      <ul>
        {items.map((value, index) => (
          // 키값 써주기!! map(), 변경될 가능성 있는 리스트같은건 고유 key를 써야한ㄴ다. index 안된다!
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}

// import User from './components/User';

// export default function App() {
//   const user = {
//     id: 1,
//     name: 'sucoding',
//     age: 20,
//   };
//   return (
//     <>
//       {/* <User user={user} /> */}
//       <User {...user} clickHandler={() => alert('click')} />
//     </>
//   );
// }

// const isLogin = false;
// 1. if 조건문
// if (isLogin) {
//   return <LoggedIn />;
// } else {
//   return <NotLoggedIn />;

// 2. 삼항 연산자
// return
// <>
// {isLogin ? <h1>User Is Login!</h1> : <h1>User Is Not Login!</h1>}
// </>;

// 3. 논리 && 연산자
// return (
//   <>
//     {isLogin && <h1>User Is Login!</h1>}
//     {!isLogin && <h1>User Is Not Login!</h1>}
//   </>
// );

// 반복 랜더링
// 반복문을 활용해서 반복 렌더링을 수행하는 기법
// const items = [<li>'apple'</li>, <li>'banana'</li>, <li>'orange'</li>];
