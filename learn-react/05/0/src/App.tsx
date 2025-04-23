export default function App() {
  const picture = [
    'https://pixabay.com/get/g3c434fd0f3bf9a25bbf61ad54f5e676e9845fe7a4efd1b3529a701c6a7f3ff7b643a6de971669531b5f4aff0b6a66fce2867eab78cf6312a9338383f72c83766a42e15b38789dd409fc633f37aecb39e_640.jpg',
    'https://pixabay.com/get/g3c434fd0f3bf9a25bbf61ad54f5e676e9845fe7a4efd1b3529a701c6a7f3ff7b643a6de971669531b5f4aff0b6a66fce2867eab78cf6312a9338383f72c83766a42e15b38789dd409fc633f37aecb39e_640.jpg',
    'https://pixabay.com/get/g3c434fd0f3bf9a25bbf61ad54f5e676e9845fe7a4efd1b3529a701c6a7f3ff7b643a6de971669531b5f4aff0b6a66fce2867eab78cf6312a9338383f72c83766a42e15b38789dd409fc633f37aecb39e_640.jpg',
    'https://pixabay.com/get/g3c434fd0f3bf9a25bbf61ad54f5e676e9845fe7a4efd1b3529a701c6a7f3ff7b643a6de971669531b5f4aff0b6a66fce2867eab78cf6312a9338383f72c83766a42e15b38789dd409fc633f37aecb39e_640.jpg',
    'https://pixabay.com/get/g3c434fd0f3bf9a25bbf61ad54f5e676e9845fe7a4efd1b3529a701c6a7f3ff7b643a6de971669531b5f4aff0b6a66fce2867eab78cf6312a9338383f72c83766a42e15b38789dd409fc633f37aecb39e_640.jpg',
    'https://pixabay.com/get/g3c434fd0f3bf9a25bbf61ad54f5e676e9845fe7a4efd1b3529a701c6a7f3ff7b643a6de971669531b5f4aff0b6a66fce2867eab78cf6312a9338383f72c83766a42e15b38789dd409fc633f37aecb39e_640.jpg',
  ];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {picture.map((src, index) => (
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
