import moon from "./assets/images/moon.jpg";

export default function App() {
  return (
    <>
      <h1 className="ibm-plex-sans text-3xl underline">Hello React!</h1>

      {/* 폰트 적용 방법 (클래스명 fonts.css에서 지정할 수 있음) */}
      <div className="NanumHuman">반갑읍니다.</div>
      <div className="jeju text-3xl">폭싹 속았수다 그거 재밌냐</div>

      {/* public 폴더에 있는 이미지는 .././로 적용 가능 */}
      {/* src 폴더에 있는 이미지는 import로 불러온다 */}
      <div className="bg-a"></div>
      <div className="bg-b"></div>
      <div style={{ width: "100%", height: "600px", background: `url(${moon})` }}></div>

      <h1 className="text-3xl">tailwind</h1>
      {/* tailwind는 문자열 조합 방식은 적용할 수 없다. (public 폴더의 이미지만 적용 가능하다는 뜻) */}
      <div className="w-full h-[200px] bg-[url('/images/a.jpg')]"></div>
    </>
  );
}
