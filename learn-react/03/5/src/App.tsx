import a from "./assets/images/a.jpg";

export default function App() {
  return (
    <>
      {/* public 폴더에 있는건 "/..." */}
      <img src="/images/b.jpg" alt="sample img" />
      <div className="bg-b"></div>
      <div style={{ width: "100%", height: "200px", background: `url('/images/b.jpg')` }}></div>
      <h2 className="text-3xl">tailwind</h2>
      <div className="w-full h-[200px] bg-[url('/images/b.jpg')]"></div>

      {/* src 폴더에 있는 건 */}
      {/* 하지만 이렇게 하면 번들링이 되어 build했을 때 안뜸 */}
      {/* <img src="/src/assets/images/a.jpg" alt="a.jpg" /> */}
      <img src={a} alt="a.jpg" />
      <div className="bg-a"></div>
      <div style={{ width: "100%", height: "200px", background: `url(${a})` }}></div>
      <h3>tailwind css</h3>
      <div className={`w-full h-[200px]`} style={{ background: `url('/images/b.jpg')` }}></div>
    </>
  );
}
