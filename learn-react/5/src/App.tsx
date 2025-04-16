import a from './assets/images/a.jpg';
export default function App() {
  return (
    <>
      {/* public 안에 파일들은 그냥 / 뒤에 파일명만 붙이면 된다. */}
      <img src="/b.jpg" alt="sample img" />
      {/* src 폴더에 있는 이미지 */}
      <img src={a} alt="a.jpg" />
      <div className="bg-a"></div>
      <div className="bg-b"></div>

      <h2>tailWind</h2>
      <div className="w-full h-[200px] bg-[url('/b.jpg')]"></div>
      {/* tailwind는 아래 방식으로는 이미지를 낼 수 없다. */}
      <div className="w-full h-[200px] bg-[url(${a})]"></div>
    </>
  );
}

// import { twMerge } from 'tailwind-merge';

// export default function App() {
//   const islogin = true;
//   return (
//     <>
//       <h1
//         className={twMerge('text-3xl', 'text-9xl', islogin && 'text-rose-500')}
//       >
//         Hello World!
//       </h1>
{
  /* <h1 className="nanumpen text-3xl underline">App Component</h1>
<h1 className="nanumpen text-3xl underline font-bold">App Component</h1>
<h1 className="jeju">안녕! 나는 제주체야 😄</h1>
<h1 className="jeju">React + Tailwind + Jeju 폰트</h1> */
}
//     </>
//   );
// }
