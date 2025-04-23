export default function Main() {
  return (
    <>
      <main>
        <section id="section1">
          <h2 className="title">소개</h2>
          <p>여기에 소개 내용을 작성하세요</p>
        </section>
        <section id="section2">
          <h2>서비스</h2>
          <p className="underline">여기에 제공하는 서비스 내용을 작성하세요.</p>
          {/* className을 겹치도록 설정해도 Footer.module.css의 css스타일이 적용되지 않는다. */}
        </section>

        <section id="section3">
          <h2>연락처</h2>
          <p>여기에 연락처 정보를 작성하세요.</p>
        </section>
      </main>
    </>
  );
}
