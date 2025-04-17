import a from './assets/images/a.jpg';

export default function App() {
  return (
    <>
      {/* public 폴더에 있는 건 "/...." */}
      <img src="/b.jpg" alt="sample img" />
      <div className="bg-b"></div>
      <div
        style={{ width: '100%', height: '200px', background: `url('/b.jpg')` }}
      ></div>
      <h2>tailwind</h2>
      <div className="w-full h-[200px] bg-[url(/b.jpg)]"></div>
      {/* src 폴더에 있는 건 */}
      <h1>src</h1>
      <img src={a} alt="a.img" />
      <div className="bg-a"></div>
      <div
        style={{ width: '100%', height: '200px', background: `url(${a})` }}
      ></div>
      <h3>tailwind css</h3>
      <div
        className={`w-full h-[200px]`}
        style={{ background: `url(./assets/images/a.jpg)` }}
      ></div>
    </>
  );
}
