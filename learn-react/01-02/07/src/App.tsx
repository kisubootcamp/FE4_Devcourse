import a from "./asset/images/a.jpg";
export default function App() {
  return (
    <>
      <h1 className="hambak text-3xl font-bold">함박눈</h1>
      <h1 className="nanumpen">나눔펜 테스트</h1>
      <h1 className="ShinChon">신촌가자</h1>
      <img src="/images/b.jpg" alt="sample Img" />
      {/* public폴더에 있는건 그냥 / */}
      <div className="bg-a"></div>

      <div
        style={{
          width: "200px",
          height: "400px",
          background: `url("/images/b.jpg")`,
        }}
      ></div>
      <h1>나눠두기</h1>
      <h2>tailwind</h2>
      <div className={`w-full h-[200px] bg-[url("/images/b.jpg")]`}></div>
      <img src={a} alt="a" />
      {/* src 폴더에 있는건 중괄호 */}
      <div className="bg-a"></div>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: `url(${a})`,
        }}
      ></div>
      <h3>tailwind css</h3>
      <div className={`w-full h-[100px] bg-[url${a}]`}>
        유틸리티 클래스의 문자열 조합을 허용하지 않음
      </div>
      {/* tailwind는 인라인으로만 써야한다. src아래 있는 파일은 불러오지 못한다. */}
      <img src={a} alt="a" />
    </>
  );
}
// public: 인증 파일류, 파비콘, robots.tct
// src: 대부분의 이미지는 src폴더에 넣는게 좋다.
// 번들링: 리소스를 최적화(압축, 캐시)
