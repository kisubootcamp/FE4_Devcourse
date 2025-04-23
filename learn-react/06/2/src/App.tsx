//import { useRef, useState } from "react";
//useRef 훅
//-값이 변경돼도 리렌더링이 발생하지 않는 변수
//-JSX 요소를 참조하는 경우

//컴포넌트가 다시 그려진다? (리-렌더링)
//함수가 다시 실행된다는 것.

//리액트가 관리하는 함수 useState
//실시간성이 보장됨
//값은 변하는데 내부에서만 사용하고 굳이 실시간으로 매번 리렌더링할 필요는 없을때->굳이 useState를 사용할 필요가 없다
//이럴때는 useRef훅을 사용(리렌더링이 발생해도 값이 유지)
// export default function App() {
//   // console.log("App Component");
//   // const [cnt,setCnt]=useState(0);
//   const cnt = useRef(0);
//   const [count, setCount] = useState(0); //함수가 다시 호출되어도 한번 초기화된 값은 변하지 않는다.(다시 값이 리셋되지 않음)
//   const increment = () => {
//     cnt.current += 1;
//     setCount((count) => count + Math.floor(Math.random() * 10) + 1);
//     // setCnt((cnt)=>cnt+1);
//   };
//   const printConsole = () => {
//     //몇번 클릭했는지 콘솔로 출력
//     console.log(`지금까지 ${cnt.current}번 클릭됨`);
//   };
//   return (
//     <>
//       <h1 className="text-3xl underline">count:{count}</h1>
//       <button onClick={increment}>증가</button>
//       <button onClick={printConsole}>count increment</button>
//     </>
//   );
// }

import { useRef, useState } from "react";
//값의 유지는 필요하되, 리렌더링이 발생하지 않는 변수가 필요할 때
//JSX 요소에 대한 참조가 필요할 때
export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);

  const isSubmitting = useRef(false); //jsx에서는 초기 값만 사용가능, 그 이후 변경된 값은 반영되지 않음
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting.current) return;
    if (!email) {
      alert("이메일을 입력해주세요");
      // (
      //   document.querySelector("input[type='text']") as HTMLInputElement
      //   //리액트는 가상돔을 사용하고 있음에도 이 쿼리셀렉터는 오리지널 돔을 접근하고있다=>권장되지않음
      // ).focus();
      emailRef.current?.focus(); //이메일 입력이 없는경우 참조가 존재하면 커서깜박이도록
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력해주세요");
      pwRef.current?.focus(); //비밀번호호 입력이 없는경우 참조가 존재하면 커서깜박이도록
      return;
    }
    isSubmitting.current = true;
    console.log("로그인됨");
    setTimeout(() => {
      isSubmitting.current = false;
    }, 2000);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          ref={pwRef}
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
