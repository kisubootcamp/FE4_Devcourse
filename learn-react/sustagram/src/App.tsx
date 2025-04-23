import { useState } from "react";

export default function App() {
  const initialPicture = [
    "https://cdn.pixabay.com/photo/2021/10/13/11/44/cat-6706354_640.jpg",
    "https://cdn.pixabay.com/photo/2019/04/02/16/11/cat-4098058_640.jpg",
    "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_640.jpg",
    "https://cdn.pixabay.com/photo/2021/10/13/11/50/cat-6706393_640.jpg",
    "https://cdn.pixabay.com/photo/2023/03/06/16/16/cat-7833833_640.jpg",
    "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg",
  ];

  const [picture, setPicture] = useState<string[]>(initialPicture);
  const [deletedPictures, setDeletedPictures] = useState<
    { url: string; index: number }[]
  >([]);

  const handleDelete = (index: number) => {
    const newPicture = picture.filter((_, i) => i !== index);
    setPicture(newPicture);
    setDeletedPictures([...deletedPictures, { url: picture[index], index }]);
  };

  const handleUndo = () => {
    if (deletedPictures.length === 0) return;

    const lastDeleted = deletedPictures[deletedPictures.length - 1];
    const newPicture = [...picture];
    newPicture.splice(lastDeleted.index, 0, lastDeleted.url);

    setPicture(newPicture);
    setDeletedPictures(deletedPictures.slice(0, -1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleUndo}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
          >
            <img src="/undo.svg" alt="Moon icon" className="h-5 w-5" />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {picture.map((value, index) => (
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
              onClick={() => handleDelete(index)}
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
