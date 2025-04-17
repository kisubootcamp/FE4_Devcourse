import a from "./assets/images/a.jpg";

export default function App() {
	return (
		<>
			{/* public 폴더에 있는 건 "/xxx.jpg" 형태로 적으면 된다 */}
			{/* "/public/xxx.jpg"로 하면 경고메시지 나옴 */}
			<img src="/images/b.jpg" alt="sample img" />
			<div className="bg-b"></div>
			<div
				style={{
					width: "100%",
					height: "200px",
					background: "url(/images/b.jpg)",
				}}></div>
			<h2>tailwind</h2>
			<div className="w-full h-[200px] bg-[url('/images/b.jpg')]"></div>
			{/* src 폴더에 있는 건 import해야 함 */}
			<img src={a} alt="a.jpg" />
			<div className="bg-a"></div>
			<div
				style={{
					width: "100%",
					height: "200px",
					background: `url(${a})`,
				}}></div>
			<div className={`w-full h-[200px] bg-[url(${a})]`}></div>
			{/* tailwind는 사용 불가능 */}
			{/* tailwind는 문자열 조합을 허용하지 않음 */}
			{/* 인라인 스타일과 혼합해야 함 */}
		</>
	);
}

/*
public 폴더는 직접 접근해야 하고,
빌드 과정에 포함되지 않는 정적 파일을 보관할 때 사용합니다.
ex) 파비콘, SEO 관련 파일(robots.txt, manifest.json),
외부에서 직접 참조되는 이미지 등. 

src/assets 폴더는 빌드 도구로 처리되어야 하는 리소스를 보관합니다.
ex) 컴포넌트에서 import해서 사용하는 이미지,
스타일시트에서 사용하는 배경 이미지, 폰트 등.
*/
