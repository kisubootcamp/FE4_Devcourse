// export default function App() {
//   return (
//     <>
//       <h1 className="nanumpen text-3xl underline">App Component</h1>
//       <h1 className="nanumpen text-3xl underline font-bold">App Component</h1>
//       <h1 className="hambak">App Component 소복소복</h1>
//       <h1 className="jeju">폭삭 속았수다</h1>
//     </>
//   );
// }
import a from "./assets/images/a.jpg";
export default function App() {
  return (
    <>
      {/* public 폴더에 있는건 "/...." */}
      <img src="/images/b.jpg" alt="sample img" />
      <div className="bg-b"></div>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: `url('/images/b.jpg')`,
        }}
        // background로 이미지 넣으면 여러개나옴
        // <img style=이미지/>로 하면 한개만 나옴
      ></div>
      <h2 className="text-3xl">tailwind</h2>
      <div className="w-full h-[200px] bg-[url('/images/b.jpg')]"></div>
      {/* src 폴더에 있는건 import 사용해야함=>브라우저에서는 jpg이름이 조금달라짐(번들링), public은 그냥 나옴*/}
      {/* npm run build npm run preview로 결과볼 수 있음 */}
      {/* 번들링 된건 dist/assets 폴더 안에 다 들어감 */}
      <h1 className="text-3xl">src</h1>
      <img src={a} alt="a.jpg" />
      <div className="bg-a"></div>
      <div
        style={{ width: "100%", height: "200px", background: `url(${a})` }}
      ></div>
      <h3>tailwind css</h3>
      {/* <div className={`w-full h-[200px] bg-[url(${a})]`}></div> 처럼 ${}를 안에 넣는것 허용하지 않음*/}
      <div
        className={`w-full h-[200px]`}
        style={{
          background: `url('/images/b.jpg')`,
        }}
      ></div>
    </>
  );
}
