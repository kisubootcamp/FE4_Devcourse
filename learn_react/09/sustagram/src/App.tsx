import { useState } from "react";

export default function App() {
  // const picture = [
  //   "https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2018/09/23/12/33/building-3697342_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2014/05/02/12/43/clouds-335969_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2023/01/08/05/45/mountain-7704584_1280.jpg",
  // ];

  const picture = [
    "https://dummyimage.com/600x400/000/fff&text=0",
    "https://dummyimage.com/600x400/000/fff&text=1",
    "https://dummyimage.com/600x400/000/fff&text=2",
    "https://dummyimage.com/600x400/000/fff&text=3",
    "https://dummyimage.com/600x400/000/fff&text=4",
    "https://dummyimage.com/600x400/000/fff&text=5",
  ];

  // deleteImg : 현재이미지
  // recoveryImg : 삭제된 이미지 데이터 배열로 저장
  // 이미지 삭제
  const [deleteImg, setDeleteImg] = useState(picture);
  const [recoveryImg, setRecoveryImg] = useState<string[]>([]);
  const del = (idx: number) => {
    // 배열에 저장
    const removed = deleteImg[idx];
    setRecoveryImg([...recoveryImg, removed]);
    // 이미지 삭제 패턴
    setDeleteImg(deleteImg.filter((value, i) => i !== idx));
  };

  // 이미지 복구
  const recoveryDeletedImg = () => {
    // 되돌릴 이미지가 없으면 return
    if (recoveryImg.length === 0) return;
    // 되돌릴 이미지의 길이 -1에 있는 이미지는 최근에 삭제된 이미지
    const lastDeleted = recoveryImg[recoveryImg.length - 1];
    setDeleteImg([...deleteImg, lastDeleted]);
    setRecoveryImg(recoveryImg.slice(0, -1));
  };
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={recoveryDeletedImg}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
          >
            <img src="/undo.svg" alt="Moon icon" className="h-5 w-5" />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {deleteImg.map((value, index) => (
          <div className="group relative" key={index}>
            <a className="group" href="#">
              <img
                src={value}
                width="400"
                height="400"
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
              />
            </a>
            <button
              onClick={() => del(index)}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full"
            >
              <img src="/delete.svg" alt="Delete icon" className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
