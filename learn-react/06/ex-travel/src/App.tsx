import travel from './assets/images/travel.png';
import seoul from './assets/images/seoul.jpg';
import london from './assets/images/london.jpg';
import paris from './assets/images/paris.jpg';
import newyork from './assets/images/newyork.jpg';
import { useState } from 'react';

export default function App() {
  const [image, setImage] = useState(seoul);
  const [imageInfo, setImageInfo] = useState('서울');
  const handleImage = (src: string, alt: string) => {
    setImage(src);
    setImageInfo(alt);
  };
  return (
    <>
      <div className='absolute top-10 left-10 text-3xl cursor-pointer'>
        <div className='light-icon fa-regular fa-sun'></div>
        <div className='dark-icon fa-regular fa-moon hidden'></div>
      </div>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col items-center gap-4  max-w-[500px]'>
          <img src={travel} alt={'로고'} width={80} />
          <ul className='flex items-center antialiased justify-around w-full'>
            <li className={imageInfo === '서울' ? 'font-bold' : ''} onClick={() => handleImage(seoul, '서울')}>
              <a href='#'>Seoul</a>
            </li>
            <li className={imageInfo === '런던' ? 'font-bold' : ''} onClick={() => handleImage(london, '런던')}>
              <a href='#'>London</a>
            </li>
            <li className={imageInfo === '파리' ? 'font-bold' : ''} onClick={() => handleImage(paris, '파리')}>
              <a href='#'>Paris</a>
            </li>
            <li className={imageInfo === '뉴욕' ? 'font-bold' : ''} onClick={() => handleImage(newyork, '뉴욕')}>
              <a href='#'>NewYork</a>
            </li>
          </ul>
          <div>
            <img src={image} alt={imageInfo} />
          </div>
        </div>
      </div>
    </>
  );
}
