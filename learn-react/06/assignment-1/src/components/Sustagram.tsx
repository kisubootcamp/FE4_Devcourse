import { useRef, useState } from "react";

export default function Sustagram() {
	const [picture, setPicture] = useState([
		{
			index: 0,
			src: "https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_1280.jpg",
		},
		{
			index: 1,
			src: "https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540_1280.jpg",
		},
		{
			index: 2,
			src: "https://cdn.pixabay.com/photo/2018/09/23/12/33/building-3697342_1280.jpg",
		},
		{
			index: 3,
			src: "https://cdn.pixabay.com/photo/2014/05/02/12/43/clouds-335969_1280.jpg",
		},
		{
			index: 4,
			src: "https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842_1280.jpg",
		},
		{
			index: 5,
			src: "https://cdn.pixabay.com/photo/2023/01/08/05/45/mountain-7704584_1280.jpg",
		},
	]);

	const deletedImage = useRef<{ index: number; src: string }[]>([]);

	const deletePicture = (index: number) => {
		deletedImage.current = [...deletedImage.current, picture[index]];
		// 배열안에 요소를 삭제할 때는 거의 filter를 쓴다.
		setPicture((picture) => picture.filter((_, i) => i !== index));
	};

	const recoveryPicture = () => {
		if (deletedImage.current.length === 0) return;
		const [recoveryPic, ...remainPicture] = deletedImage.current;
		deletedImage.current = remainPicture;
		setPicture((picture) => [...picture, recoveryPic].sort((a, b) => a.index - b.index));
	};

	return (
		<div className="w-full max-w-4xl mx-auto py-6 px-4">
			<header className="flex items-center justify-between mb-6">
				<h1 className="text-2xl font-bold">SUSTAGRAM</h1>
				{/* More Buttons */}
				<div className="flex items-center gap-2">
					<button
						onClick={recoveryPicture}
						className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
					>
						{/* undo 버튼 누르면 삭제된 순서대로 복구. 복구하면 뒤에 붙는게 쉬운 버전 / 복구하면 원래 위치에 붙이는게 어려운 버전 */}
						<img src="/undo.svg" alt="Moon icon" className="h-5 w-5" />
						<span className="sr-only">Toggle dark mode</span>
					</button>
				</div>
			</header>
			<div className="grid grid-cols-3 gap-4">
				{picture.map((value, index) => (
					<div className="group relative" key={value.index}>
						<a className="group" href="#">
							<img
								src={value.src}
								width="400"
								height="400"
								alt={`Photo ${index + 1}`}
								className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
								style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
							/>
						</a>
						<button
							onClick={() => deletePicture(index)}
							className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full"
						>
							<img src="/delete.svg" alt="Delete icon" className="h-4 w-4" />
							<span className="sr-only">Delete</span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
