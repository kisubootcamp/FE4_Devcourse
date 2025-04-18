import User from "./components/User";

export default function App() {
  const user = {
    id: 1,
    name: "sucoding",
    age: 20,
  };
  return (
    <>
      {/* 
        1. 객체를 객체 그대로 던진다
         <User user={user} /> 
      */}
      {/* 
        2. 
          <User id={user.id} name={user.name} age={user.age} /> 
      */}
      {/* 
        3. User 객체의 요소를 전개해서 props에 전달 -> 객체에만 사용 가능 -> 왜? 객체는 속성과 값이 명확해서 
          내부적으로 ⬇️ 이렇게 전달하는거랑 똑같음
          <User id={user.id} name={user.name} age={user.age} /> 
      */}

      {/* 전개 연산자 사용 */}
      <User {...user} clickHandler={() => alert("click")} />
    </>
  );
}
