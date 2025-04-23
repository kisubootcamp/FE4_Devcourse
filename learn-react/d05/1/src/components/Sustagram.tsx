export default function Sustagram() {
  const images = [
    "https://cdn.pixabay.com/photo/2025/04/03/04/49/winter-9510493_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/03/03/17/47/cliffs-9444605_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/02/12/13/21/country-9401550_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/09/15/10/05/building-9048827_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/12/23/17/16/switzerland-9287018_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/04/13/15/27/sunrise-9531906_1280.jpg",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <a key={index} className="group" href="#">
            <img
              src={img}
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
