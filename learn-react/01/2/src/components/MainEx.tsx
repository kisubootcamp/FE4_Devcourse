export default function MainEX() {
  return (
    <>
      <main>
        <section id='section1'>
          <h2 className='title'>소개</h2>
          {/* 여기서 App.css 파일을 import하지 않았는데 그래도 스타일 적용됨 -> 그래서 '글로벌' 스타일임 */}
          <p className='underLine'>여기에 소개 내용을 작성하세요.</p>
          {/* css 모듈 방식이라 footer 외에는 적용되지 않음, 근데 여기는 왜 'underline'으로 넣은거지? */}
        </section>

        <section id='section2'>
          <h2>서비스</h2>
          <p>여기에 제공하는 서비스 내용을 작성하세요.</p>
        </section>

        <section id='section3'>
          <h2>연락처</h2>
          <p>여기에 연락처 정보를 작성하세요.</p>
        </section>
      </main>
    </>
  );
}
