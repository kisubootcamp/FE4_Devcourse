import a from "./assets/images/a.jpg";

export default function App() {
  return (
    <>
      {/* <h1 className="text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam dolorem,
        tenetur similique error atque fuga ratione laboriosam non, cum inventore
        harum voluptatem, perferendis eaque nesciunt aspernatur voluptas maxime!
        Similique, temporibus!
      </h1>
      <h1 className="text-3xl hambak">함박눈이 소복소복</h1>
      <h1 className="text-3xl jeju">폭싹 속았수다</h1> */}

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl jeju">폭싹 속았수다</h1>
          {/* public 폴더에 있는건 /... 으로 접근. 절대 경로 */}
          {/* public 폴더에 있는 이미지는 배포시 건들지 않으므로 배포할때 정상적으로 로딩 됨 */}
          <img src="/b.jpg" alt="b.jpg" className="w-1/2" />
          {/* src/assets 폴더에 있는건 ./assets/... 로 접근. 상대 경로*/}
          {/* 하지만 배포시 이미지가 정상 인식되지 않음. 그래서 import 문으로 이미지를 불러와서 진행 해야함. */}
          <img src={a} alt="a.jpg" className="w-1/2" />
          <div className="bg-a"></div>
          <div className="w-full h-[200px] bg-[url('b.jpg')] text-white text-3xl">
            Tailwind
          </div>
          <div className="bg-b"></div>
          <div
            className={`w-full h-[200px] text-3xl text-white`}
            style={{ backgroundImage: `url(${a})` }}
          >
            src 온전한 문자열만 허용한다. 유틸리티 클래스의 문자열 조합을
            허용하지 않는다. <br />
            그래서 인라인 스타일로 혼합하여야 한다.
          </div>
        </div>
      </div>
    </>
  );
}
