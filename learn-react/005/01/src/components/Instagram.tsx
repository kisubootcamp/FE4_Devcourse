export default function Instagram() {
  const imgs = [
    "https://cdn.pixabay.com/photo/2025/01/17/01/56/horse-9338907_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/03/03/17/47/cliffs-9444605_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/04/03/04/49/winter-9510493_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/28/12/28/ship-8793759_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/03/18/13/18/harvard-pilot-9478129_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/04/12/19/07/white-wagtail-9530692_1280.jpg",
  ];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">GUNSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {imgs.map((v, i) => (
          <a key={i} className="group" href={v}>
            <img
              src={v}
              width="400"
              height="400"
              alt={`Photo ${i + 1}`}
              className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
              style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
