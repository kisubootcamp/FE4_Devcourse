export default function Sustagram() {
  const images = [
    "https://cdn.pixabay.com/photo/2024/01/18/10/07/sunset-8516639_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/07/20/35/climb-2125148_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/26/11/57/mountaineer-2100050_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/07/18/16/23/mountaineer-396533_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/11/05/14/29/trees-sunrise-3796183_1280.jpg",
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
