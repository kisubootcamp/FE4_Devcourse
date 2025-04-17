/*
export default function App() {
  return (
    <>
      <h1 className='nanumpen text-3xl underline'>App Component</h1>
      <h1 className='nanumpen text-3xl underline font-bold'>App Component</h1>
      <h1 className='yangjin'>양진체 입니다 눈누 폰트로 설치했어요</h1>
      <h1 className='jeju'>폭싹 속았수다</h1>
    </>
  );
}
*/

// export default function App() {
//   return (
//     <>
//       {/* public 폴더에 있는건 /... */}
//       <img src='/b.jpg' alt='sapple img' />

//       {/* src 폴더에 있는건 -> 번들링 대상이라 배포하면 해당 경로의 것들을 제대로 참조할 수 없음 */}
//       <img src='/src/assets/images/a.jpg' alt='a.jpg' />
//     </>
//   );
// }

import a from "./assets/images/a.jpg";
export default function App() {
  return (
    <>
      {/* public 폴더에 있는건 /... */}
      <img src='/b.jpg' alt='sapple img' />
      <div className='bg-b'></div>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: `url('/images/b.jpg')`,
          // 강사님도 이거 경로 자동완성 안되나..?
        }}
      ></div>
      <h2>tailwind</h2>
      <div className="w-full h-[200px] bg-[url('/images/b.jpg')]"></div>

      {/* src 폴더에 있는건 -> 번들링 대상이라 배포하면 해당 경로의 것들을 제대로 참조할 수 없음 */}
      <img src={a} alt='a.jpg' />
      <div className='bg-a'></div>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: `url(${a})`,
        }}
      ></div>
    </>
  );
}

// npm run build -> npm run preview 해서 렌더링된거 확인해보기 !
// build할 때 번들링 된 건, dist/assets 폴더 안에 들어감 (이거로 렌더링하는것)
