import f1 from "./assets/images/1.jpg";
import f2 from "./assets/images/2.jpg";
import f3 from "./assets/images/3.jpg";
import f4 from "./assets/images/4.jpg";
import f5 from "./assets/images/5.jpg";
import f6 from "./assets/images/6.jpg";

export default function Sustagram() {
  const imgArr = [f1, f2, f3, f4, f5, f6];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {imgArr.map((img, index) => (
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
