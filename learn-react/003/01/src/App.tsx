import a from "./assets/images/a.png";
export default function App() {
  return (
    <>
      {/* public 폴더에 있는건 경로를 "/..." */}
      <img src="/b.png" alt="public img" />
      <div className="bg-b"></div>
      <div
        style={{
          width: "50%",
          height: "100px",
          background: `url('/b.png')`,
        }}
      ></div>
      <h1 className="text-3xl">tailwind</h1>
      <div
        className="w-0.5 h-[100px]"
        style={{
          background: `url('/b.png')`,
        }}
      ></div>
      {/* src 폴더에 있는건 경로를 "/src/..." */}
      <img src={a} alt="src img" />
      <div className="bg-a"></div>
      <div
        style={{
          width: "50%",
          height: "100px",
          background: `url(${a})`,
        }}
      ></div>
      <h1 className="text-3xl">tailwind</h1>
      <div
        className="w-0.5 h-[100px]"
        style={{
          background: `url(${a})`,
        }}
      ></div>
    </>
  );
}
