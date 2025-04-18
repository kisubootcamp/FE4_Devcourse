import a from "./assets/images/a.jpg";

export default function App() {
  return (
    <>
      {/* public 폴더에 있는 건 "/..." -> public 폴더를 /라고 생각하고 경로를 적어주면 됨 */}
      <img src="/b.jpg" alt="b.jpg" />
      <div className="bg-b"></div>
      <div
        style={{
          background: `url('/b.jpg')`,
          width: "100%",
          height: "200px",
        }}
      ></div>
      <h2 className="text-3xl">tailwind</h2>
      <div className="w-full h-[200px] bg-[url('/b.jpg')]"></div>

      {/* src 폴더에 있는 건 */}
      <h2 className="text-3xl">src</h2>
      <img src={a} alt="a.jpg" />
      <div className="bg-a"></div>
      <div
        style={{
          background: `url(${a})`,
          width: "100%",
          height: "200px",
        }}
      ></div>
      <h2 className="text-3xl">tailwind</h2>
      {/* tailwind는 문자열 조합이 불가능하므로 이미지가 보이지 않음 */}
      <div className={`w-full h-[200px] bg-[url(${a})]`}></div>
      <div
        className={`w-full h-[200px]`}
        style={{ background: `url(${a})` }}
      ></div>
    </>
  );
}
