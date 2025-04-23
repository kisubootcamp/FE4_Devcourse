export default function Sustagram() {
  const images = [
    "https://cdn.pixabay.com/photo/2021/10/13/11/44/cat-6706354_640.jpg",
    "https://cdn.pixabay.com/photo/2019/04/02/16/11/cat-4098058_640.jpg",
    "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_640.jpg",
    "https://cdn.pixabay.com/photo/2021/10/13/11/50/cat-6706393_640.jpg",
    "https://cdn.pixabay.com/photo/2023/03/06/16/16/cat-7833833_640.jpg",
    "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg",
  ];
  return (
    <>
      <div className="w-full max-w-4xl mx-auto py-6 px-4">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
          {/* More Buttons */}
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
              <img src="/sun.svg" alt="Moon icon" className="h-5 w-5" />
              <span className="sr-only">Toggle dark mode</span>
            </button>
          </div>
        </header>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <a key={index} className="group" href="#">
              <img
                src={image}
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
    </>
  );
}
