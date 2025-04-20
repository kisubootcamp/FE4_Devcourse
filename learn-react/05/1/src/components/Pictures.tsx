export default function Pictures() {
  const pictures = [
    'https://cdn.pixabay.com/photo/2020/05/20/07/10/architecture-5195171_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/06/19/18/06/beach-4285402_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/07/11/07/28/lighthouse-4330207_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/12/13/16/00/mongolia-4693310_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/12/19/10/16/sky-4705828_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/10/23/13/58/sunset-3767939_1280.jpg',
  ];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Pictures</h1>
        {/* More Buttons */}
      </header>

      <div className="grid grid-cols-3 gap-4">
        {pictures.map((src, index) => (
          <a key={index} className="group" href="#">
            <img
              src={src}
              width="400"
              height="400"
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
              style={{ aspectRatio: '400 / 400', objectFit: 'cover' }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
