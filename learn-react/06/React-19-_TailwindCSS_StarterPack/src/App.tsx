//조건부 렌더링
// 조건에 따라 컴포넌트를 렌더링
// 1. if
// 2. 삼항연산자
// 3. 논리 && 연산자
// 3.1 expr1 && expr2 -> true

import Button from './components/html/button';
import Input from './components/html/Input';
import Sustagram from './components/Sustagram';

// 반복 렌더링
// 반복문 활용해서 반복 렌더링 수행하는 기법
// map()
// import LoggedIn from './components/LoggedIn';
// import NotLoggedIn from './components/NotLoggedIn';
// import User from './components/User';

export default function App() {
  // const isLogin = true;
  // if (isLogin) {
  //   return (
  //     <>
  //       <LoggedIn />
  //     </>
  //   );
  // }
  // const user = {
  //   id: 1,
  //   name: 'sucoding',
  //   age: 20,
  // };
  // return (
  //   <>
  //     {/* <User user={user} /> */}
  //     <User {...user} checkHandler={() => alert('click')} />
  //     {/* <User id={user.id} name={user.name} age={user.age} /> */}
  //     <NotLoggedIn />
  //   </>
  // );
  // return <>{isLogin ? <LoggedIn /> : <NotLoggedIn />}</>;
  // return (
  //   <>
  //     {isLogin && <LoggedIn />}
  //     {!isLogin && <NotLoggedIn />}
  //   </>
  // );
  // const items = ['apple', 'banana', 'orange', 'orange'];
  // const users = [
  //   {
  //     id: 1,
  //     name: 'John',
  //     age: 20,
  //     checkHandler: () => alert('Hello'),
  //   },
  //   {
  //     id: 2,
  //     name: 'Sucoding',
  //     age: 30,
  //   },
  // ];
  // return (
  //   <>
  //     <ul>
  //       {users.map((user) => (
  //         <User key={user.id} {...user} />
  //       ))}
  //     </ul>
  //     <ul>
  //       {items.map((value, index) => (
  //         <li key={index}>{value}</li>
  //       ))}
  //     </ul>
  //   </>
  // );
  return (
    <>
      <div className="item-middle">
        <Button type="button" className="bg-[#4f4f4f]">
          Add
        </Button>
        <Button type="submit" className="bg-[#ed4848]">
          cancel
        </Button>
        <Button type="reset" className="bg-[#7d48ed]">
          Success
        </Button>
        <Input type="text" className="input-style" />
        <Input type="password" className="input-style" />
      </div>
    </>
  );
}
