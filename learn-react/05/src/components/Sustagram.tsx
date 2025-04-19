export default function Sustagram() {
  const renderImg = [
    "https://i.pinimg.com/736x/02/66/a1/0266a10b4de19e2f1146e77fe2ed16ac.jpg",
    "https://i.pinimg.com/736x/81/ec/02/81ec02c841e7aa13d0f099b5df02b25c.jpg",
    "https://i.pinimg.com/736x/33/c1/c4/33c1c45d71101d2c2997560ad9142b5f.jpg",
    "https://i.pinimg.com/736x/b8/e8/dc/b8e8dcac0164c6604c87906abb462a48.jpg",
    "https://i.pinimg.com/736x/39/e8/f0/39e8f0ffea0b56c4d3a08a349895dd1a.jpg",
    "https://i.pinimg.com/736x/75/e0/be/75e0be7568613c8176118944eb8151cd.jpg",
  ];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {renderImg.map((src, idx) => (
          <a key={idx} className="group" href="#">
            <img
              src={src}
              width="400"
              height="400"
              alt={`Photo ${idx + 1}`}
              className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
              style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
