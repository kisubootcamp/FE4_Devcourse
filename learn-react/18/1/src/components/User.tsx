export default function User() {
  const imgs = [
    "https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/03/03/17/47/cliffs-9444605_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/04/03/04/49/winter-9510493_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/03/18/13/18/harvard-pilot-9478129_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/28/12/28/ship-8793759_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/03/07/14/18/waterfall-9453143_1280.jpg",
  ];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {imgs.map((src, index) => (
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
