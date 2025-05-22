import a from "./assets/images/a.jpg";

export default function App() {
	return (
		<>
			{/* <h1 className="text-3xl underline">App Component</h1>
			<h1 className="text-3xl underline font-bold">App Component</h1>
			<h1 className="myfont text-3xl underline font-bold">App Component</h1>
			<h1 className="jeju text-3xl">제주</h1> */}

			{/* public 폴더에 있는건 "/blahblah" */}
			<img src="/images/b.jpg" alt="sample img"></img>
			<div className="bg-b"></div>
			<div style={{ width: "100%", height: "200px", background: `url('/images/b.jpg')` }}></div>
			<h2>tailwind</h2>
			<div className="w-full h-[200px] bg-[url('/images/b.jpg')]"></div>

			{/* src 폴더에 있는건 */}
			<img src={a} alt="a.jpg"></img>
			<div className="bg-a"></div>
			<div style={{ width: "100%", height: "200px", background: `url(${a})` }}></div>

			<h3>tailwind css</h3>
			<div className={`w-full h-[200px]`} style={{ background: `url('/images/b.jpg')` }}></div>
		</>
	);
}
