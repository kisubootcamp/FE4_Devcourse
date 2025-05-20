import { useRef, useState } from "react";

// 값의 유지는 필요하되, 리-렌더링이 발생하지 앟는 변수가 필요할 때
// JSX 요소에 대한 참조가 필요할 때
export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  //
  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);

  const isSubmitting = useRef(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting.current) return;

    if (!email) {
      alert("이메일을 입력해주세요");
      // (document.querySelector("input[type='text']") as HTMLInputElement).focus(); // 오리지널 돔을 접근하는 방법
      //그러나 리액트에서는 오리지널 DOM 에 접근하는 방법을 권장하지 않음
      emailRef.current?.focus();
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력해주세요");
      pwRef.current?.focus();

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

// import { useRef, useState } from "react";

// //useRef 훅
// // - 값이 변경되도 리렌더링이 발생하지 않는 변수
// // - JSX 요소를 참조하는 경우

// // 컴포넌트가 다시 그려진다? (리-렌더링)
// // 함수가 다시 실행(그려진다)된다는 것.

// // useState와 같은 리액트 훅은 리-렌더링이 되더라도 다시 정의되지 않음(=다시 호출되지 않음)

// // 리액트가 관리하는 변수
// // 실시간성이 보장됨

// // 화면에 리렌더링이 발생하지 않으면서 데이터를 저장할 수 있는 변수가 필요할 때
// // useRef 를 사용

// export default function App() {
//   console.log("App Component");
//   const cnt = useRef(0); // ref 객체 반환
//   // const [cnt, setCnt] = useState(0); // ref 객체 반환
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount((count) => count + Math.floor(Math.random() * 10) + 1);
//     // setCnt((cnt) => cnt + 1);
//     cnt.current += 1;
//   };
//   const printConsole = () => {
//     // 몇번 클릭했는지 콘솔로 출력
//     console.log(`${cnt.current} 번 클릭됨`);
//   };
//   return (
//     <>
//       <h1 className="text-3xl underline">Count : {count}</h1>
//       <br />
//       <button onClick={increment}> click</button>
//       <br />
//       <button onClick={printConsole}> count increment</button>
//     </>
//   );
// }
