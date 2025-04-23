import { useRef, useState } from "react";

// useRef 훅
// 값이 변경되어도 리렌더링이 발생하지 않는 변수 (리렌더링이 발생해도 값이 유지된다.)
// JSX 요소를 참조하는 경우

// 컴포넌트가 다시 그려진다 = 함수가 다시 실행된다.
// strict mode 때문
// 리액트 훅으로 정의한 데이터는 특별한 목적이 없다면 한번 렌더링 되었을 때의 값으로 정해진다. 즉, 다시 호출해도 값이 다시 초기값으로 정해지지 않는다.

// useState: 리액트가 관리하는 변수인데 실시간성이 보장됨
// useRef: 실시간성이 필요 없지만 값을 보존해야하는 경우에 사용
// export default function App() {
//   // console.log("App Component");
//   const [count, setCount] = useState(0);
//   const cnt = useRef(0);
//   const increment = () => {
//     cnt.current += 1;
//     setCount((count) => count + Math.floor(Math.random() * 10) + 1);
//   };
//   const printConsole = () => {
//     console.log(`지금까지 ${cnt.current}번 클릭됨`);
//   };
//   return (
//     <>
//       <h1 className="text-3xl underline">Count: {count}</h1>
//       <button className="border-2" onClick={increment}>
//         증가
//       </button>
//       <br />
//       <button className="border-2" onClick={printConsole}>
//         몇번?
//       </button>
//     </>
//   );
// }
// 값 지정(let)형으로 하면 리렌더링 할때마다 값이 초기화됨

export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null); // 타입 지정해줘야함
  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);

  const isSubmitting = useRef(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting.current) return;
    if (!email) {
      alert("이메일을 입력해주세요");
      emailRef.current?.focus();
      // 이메일을 입력하지 않으면 커서가 이동
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력해주세요");
      pwRef.current?.focus();
      // 비밀번호를 입력하지 않으면 커서가 이동
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
// 화면에서 사용되는 값이면 useRef를 사용하면 안됨.
// 값의 유지는 필요하되 리렌더링이 발생하지 않는 변수가 필요할 때 useRef 사용
// JSK 요소에 대한 참조가 필요할 때 ex) 입력하지 않은 지정 요구사항에 대한 알림이 뜬 후 해당 사항으로 커서가 자동 이동하도록 하는 참조
// 리액트는 오리지널 돔을 카피한 두 개의 가상 돔을 가지고 있음
