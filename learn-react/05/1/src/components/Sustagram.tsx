export default function Sustagram() {
	const pictures = [
		"https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg",
		"https://cdn.pixabay.com/photo/2025/03/07/14/18/waterfall-9453143_1280.jpg",
		"https://cdn.pixabay.com/photo/2025/01/17/01/56/horse-9338907_1280.jpg",
		"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_1280.jpg",
		"https://cdn.pixabay.com/photo/2025/03/18/17/03/dog-9478487_1280.jpg",
		"https://cdn.pixabay.com/photo/2025/03/16/19/25/flowers-9474432_1280.jpg",
	];
	return (
		<div className="w-full max-w-4xl mx-auto py-6 px-4">
			<header className="flex items-center justify-between mb-6">
				<h1 className="text-2xl font-bold">SUSTAGRAM</h1>
				{/* More Buttons */}
			</header>
			<div className="grid grid-cols-3 gap-4">
				{pictures.map((item, index) => (
					<a key={index} className="group" href="#">
						<img
							src={item}
							width="400"
							height="400"
							alt={`Photo ${index + 1}`}
							className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
							style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
						/>
					</a>
				))}
			</div>
		</div>
	);
}
