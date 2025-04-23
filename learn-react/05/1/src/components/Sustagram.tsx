export default function Sustagram() {
  const images = [
    "https://cdn.pixabay.com/photo/2013/04/03/21/25/flower-100263_1280.jpg",
    "https://media.istockphoto.com/id/1278726430/ko/%EC%82%AC%EC%A7%84/%ED%95%84%EB%93%9C%EC%97%90-%EB%B9%A8%EA%B0%84-%EC%96%91%EA%B7%80%EB%B9%84-%ED%98%84%EC%B6%A9%EC%9D%BC.jpg?s=612x612&w=is&k=20&c=5XpFfvaQfvFrwwLgZJ-eIJujv9-_8wqN1_gILPH8QrM=",
    "https://media.istockphoto.com/id/2149849276/ko/%EC%82%AC%EC%A7%84/poppy-field-at-sunset.jpg?s=612x612&w=is&k=20&c=8tRI9NxxMf9hrHknyKAbfDNtRbWj32k4gYT5ZGv3-Fg=",
    "https://media.istockphoto.com/id/1264775414/ko/%EC%82%AC%EC%A7%84/%EC%96%91%EA%B7%80%EB%B9%84%EC%99%80-%EB%A9%94%EB%B0%80-%ED%95%84%EB%93%9C.jpg?s=612x612&w=is&k=20&c=5A5b4Gk4I6CBlG8UgFtK0bZ_deA7q9nmU-NHWM6oF1c=",
    "https://cdn.pixabay.com/photo/2023/10/01/16/01/rose-8287698_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/07/02/22/20/bouquet-142876_1280.jpg",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {images.map((url, index) => (
          <a key={index} className="group" href="#">
            <img
              src={url}
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
