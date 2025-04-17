import b from "./assets/images/b.jpg";

export default function App() {
  return (
    <>
      {/* public 폴더에 있는건 "/...." */}
      <img src="/a.jpg" alt="sample img" />
      <div className="bg-a"></div>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: `url('/a.jpg')`,
        }}
      ></div>
      <h2>tailwind</h2>
      <div className="w-full h-[200px] bg-[url('a.jpg')]"></div>
      {/* src 폴더에 있는건 */}
      <h1>src</h1>
      <img src={b} alt="a.jpg" />
      <div className="bg-b"></div>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: `url(${b})`,
        }}
      ></div>
      <h3>tailwinds css</h3>
      <div
        className={`w-full h-[200px]`}
        style={{ background: `url(${b})` }}
      ></div>
    </>
  );
}
