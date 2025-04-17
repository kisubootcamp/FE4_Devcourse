import a from "./assets/images/b.jpg";

export default function App() {
  return (
    <>
      <div className="bg-a"></div>
      <h1>이미지 렌더링</h1>
      {/* public에 있는거 -> 절대 경로 */}
      <img src="/a.jpg" alt="sample img"></img>

      {/* src 폴더에 있는것 -> 상대경로*/}
      {/* <img src="/src/assets/images/b.jpg"></img> */}
      <img src={a}></img>
    </>
  );
}
