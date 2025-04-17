import a from "./assets/images/a.png";

export default function App() {
  return (
    <>
      {/* public 폴더에 있는건 '/...' */}
      <img src="/images/b.png" alt="" />
      <div className="bg-b"></div>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: `url("/images/b.png")`,
        }}
      ></div>
      <h2>tailwind</h2>
      <div className="w-full h-[200px] bj-[url('/images/b.png')]"></div>
      {/* src 폴더에 있는건 */}
      <img src={a} alt="" />
      <div className="bg-a"></div>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: `url(${a})`,
        }}
      ></div>
      <h2>tailwind</h2>
      <div className="w-full h-[200px]" style={{ background: `url(${a})` }}></div>
    </>
  );
}
