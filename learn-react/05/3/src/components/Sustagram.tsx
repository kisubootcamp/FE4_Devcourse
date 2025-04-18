export default function Sustagram() {
  const images = [
    "https://cdn.pixabay.com/photo/2024/05/24/14/24/dog-8785188_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/05/03/00/00/golden-retriever-750592_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/03/07/04/52/golden-retriever-662817_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/08/27/09/31/dog-7414059_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/04/19/21/29/puppies-2243686_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/15/23/26/puppy-2645981_1280.jpg",
  ];
  return (
    <div className='w-full max-w-4xl mx-auto py-6 px-4'>
      <header className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold'>SUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className='grid grid-cols-3 gap-4'>
        {images.map((src, index) => (
          <a key={index} className='group' href='#'>
            <img
              src={src}
              width='400'
              height='400'
              alt={`Photo ${index + 1}`}
              className='w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity'
              style={{aspectRatio: "400 / 400", objectFit: "cover"}}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
