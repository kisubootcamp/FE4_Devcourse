// 폰트
// export default function App() {
//   return (
//     <>
//       <h1 className=" text-3xl underline">App Component</h1>
//       <h1 className=" text-3xl underline font-bold">App Component</h1>
//       {/* 원래 볼드가 지원되는 폰트가 아니지만 vscode에서 적용해줌 */}
//       <h1 className="SF_HambakSnow">함박눈이 소복소복</h1>
//       <h1 className="jeju"> 폭싹 속았수다 </h1>
//     </>
//   );
// }

// 이미지
// import a from "./assets/images/a.jpg";
// export default function App() {
//   return (
//     <>
//       {/* public 폴더에 있는건 */}
//       <img src="/images/b.png" alt="sample img" />
//       <div className="bg-b"></div>
//       <div
//         style={{
//           width: "100%",
//           height: "200px",
//           background: `url('/images/b.png')`,
//         }}
//       ></div>
//       <h2 className="text-3xl">tailwind</h2>
//       <div className="w-full h-[200px] bg-[url('/images/b.png')]"></div>

//       {/* src 폴더에 있는건 */}
//       <h1 className="text-3xl">src</h1>
//       <img src={a} alt="a.jpg" />
//       <div className="bg-a"></div>
//       <div
//         style={{
//           width: "100%",
//           height: "200px",
//           background: `url(${a})`,
//         }}
//       ></div>
//       <h3>tailwind</h3>
//       <div
//         className={`w-full h-[200px] `}
//         style={{
//           background: `url('/images/b.png')`,
//         }}
//       ></div>
//     </>
//   );
// }

// 컴포넌트 데이터를 넘겨주는 가장 기초적인 방법
// 파일명은 소문자 상관 x. 하지만 관례
import User from "./components/User";

export default function App() {
  return (
    <>
      {/* 컴포넌트의 속성(properties)으로 데이터를 전달 */}
      {/* 컴포넌트의 properties로 데이터를 전달 */}
      {/* 컴포넌트의 props로 데이터를 전달 */}
      {/* props 객체 */}
      <User name="kyo" age={25} />
    </>
  );
}
// 컴포넌트의 속성은
// User컴포넌트의 name키의 kyo값을 전달
// age가 number 형식이면 {} 표현식으로 받아야함.
