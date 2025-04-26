export default function Sustagra() {
	const images = [
		"https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg",
		"https://cdn.pixabay.com/photo/2025/02/12/13/21/country-9401550_1280.jpg",
		"https://cdn.pixabay.com/photo/2024/09/15/10/05/building-9048827_1280.jpg",
		"https://cdn.pixabay.com/photo/2024/12/23/17/16/switzerland-9287018_1280.jpg",
		"https://cdn.pixabay.com/photo/2025/04/14/18/05/mountain-9533968_1280.jpg",
		"https://cdn.pixabay.com/photo/2022/08/02/04/11/city-7359472_1280.jpg",
	];
	return (
		<div className="w-full max-w-4xl mx-auto py-6 px-4">
			<header className="flex items-center justify-between mb-6">
				<h1 className="text-2xl font-bold">SUSTAGRAM</h1>
				{/* More Buttons */}
			</header>
			<div className="grid grid-cols-3 gap-4">
				{images.map((src, index) => (
					<a key={index} className="group" href="#">
						<img
							src={src}
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
