import User from "./components/User";

export default function App() {
  return (
    <>
      {/* 컴포넌트의 속성(properties)으로 데이터를 전달 */}
      {/* 컴포넌트의 속성(props)으로 데이터를 전달 */}
      {/* 컴포넌트의 속성(props)으로 전달되는 데이터를 props 객체 */}
      <User name="sucoding" age={20} />
    </>
  );
}
// import User from "./components/User";

// export default function App() {
//   return (
//     <>
//       {/* 컴포넌트의 속성(properties)으로 데이터를 전달 */}
//       {/* 컴포넌트의 속성(props)으로 데이터를 전달 */}
//       {/* 컴포넌트의 속성(props)으로 전달되는 데이터를 props 객체 */}
//       <User name="sucoding" age="20" />
//     </>
//   );
// }

//

// import cat2 from "./assets/images/cat-5628953_640.jpg";

// export default function App() {
//   return (
//     <>
//       {/* public 폴더에 있는건 /... 으로 작성 */}
//       <img src="/images/cat-7833833_640.jpg" alt="cat" />
//       {/* src 폴더 import */}
//       <img src={cat2} alt="cat2" />

//       <h2>tailwind</h2>
//       <div className="w-full h-[200px] bg-[url('/images/cat-7833833_640.jpg')]"></div>
//       <div
//         style={{
//           width: "100%",
//           height: "200px",
//           background: "/public/images/cat-7833833_640.jpg",
//         }}></div>
//       <div
//         style={{
//           width: "100%",
//           height: "200px",
//           background: `url(${cat2})`,
//         }}></div>
//       {/* tailwind 에서는 utility class에 문자열 조합을 하면 이미지가 렌더링 되지 않음 */}
//       <div className={`w-full h-[200px] bg-[url(${cat2})]`}></div>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <h1 className="noto-sans-kr text-3xl underline">App Component</h1>
//       <h1 className="noto-sans-kr text-3xl underline font-bold">
//         App Component
//       </h1>
//       <h1 className="chosungu">조선어쩌구</h1>
//       <h1 className="Jeju">제주 어쩌구</h1>
//     </>
//   );
// }
