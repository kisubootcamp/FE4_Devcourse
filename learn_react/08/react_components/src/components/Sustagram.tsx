export default function Sustagram() {
  const imgs = [
    "https://cdn.pixabay.com/photo/2025/04/13/15/27/sunrise-9531906_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/02/04/07/38/cherry-blossoms-7766587_1280.jpg",
    "https://media.istockphoto.com/id/1945002677/ko/%EC%82%AC%EC%A7%84/blue-wave-abstract-or-rippled-water-texture-background.jpg?s=2048x2048&w=is&k=20&c=iJNz6gc5lKJJVlzLJN9DgTJLr-4V1XIkjpOS7ReUZqU=",
    "https://media.istockphoto.com/id/2164671430/ko/%EC%82%AC%EC%A7%84/esg-environmental-social-governance-responsible-business-company.jpg?s=2048x2048&w=is&k=20&c=VBEKPq8RX1IDtQils2-pljH_2q-bD7tZ9g9dQPnkRvs=",
    "https://cdn.pixabay.com/photo/2024/10/16/09/14/alps-9124288_1280.jpg",
    "https://media.istockphoto.com/id/2109320359/ko/%EC%82%AC%EC%A7%84/swiss-village-lungern-switzerland.jpg?s=2048x2048&w=is&k=20&c=v_kUnPMyOOxpxrfhiV2dOBCBJur5RErXXZDZ_abku_k=",
  ];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {imgs.map((img, index) => (
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
