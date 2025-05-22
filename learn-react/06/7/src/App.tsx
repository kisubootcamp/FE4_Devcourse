import travel from './assets/images/travel.png';
import seoul from './assets/images/seoul.jpg';
import london from './assets/images/london.jpg';
import paris from './assets/images/paris.jpg';
import newyork from './assets/images/newyork.jpg';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';

export default function App() {
  const areas = ['Seoul', 'London', 'Paris', 'NewYork'];
  const images: { [key: string]: string } = {
    travel,
    seoul,
    london,
    paris,
    newyork,
  };
  const [location, setLoaction] = useState('Seoul');
  return (
    <>
      {/* 다크모드 */}
      <div className="absolute top-10 left-10 text-3xl cursor-pointer">
        <div className="light-icon fa-regular fa-sun"></div>
        <div className="light-icon fa-regular fa-moon"></div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <img src={travel} alt={'로고'} width={80} />
          <ul className="flex items-center antialiased justify-around w-full">
            {areas.map((area) => (
              <li className={twJoin(location === area && 'font-bold')}>
                <a href="#" onClick={() => setLoaction(area)}>
                  {area}
                </a>
              </li>
            ))}
          </ul>
          <div>
            {areas.map((area) => {
              return (
                location === area && (
                  <img src={images[area.toLocaleLowerCase()]} alt={area} />
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
