export default function Sustagram() {
  const images = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2018/09/24/03/05/cat-3699032_1280.jpg",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2020/10/05/10/51/cat-5628953_1280.jpg",
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2018/01/03/19/17/cat-3059075_1280.jpg",
    },
    {
      id: 5,
      img: "https://cdn.pixabay.com/photo/2023/12/15/21/47/cat-8451431_1280.jpg",
    },
    {
      id: 6,
      img: "https://cdn.pixabay.com/photo/2016/09/07/23/10/cat-1652880_1280.jpg",
    },
  ];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <a key={image.id} className="group" href="#">
            <img
              src={image.img}
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
