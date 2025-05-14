import React from 'react';

const Man = () => {
  return (
    <div>
      {/* Секция Новинки */}
      <div className="bg-black w-full py-12 mt-[100px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-white text-3xl font-semibold mb-8 text-center">Новинки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-black text-center">
                <img src="src/assets/tommy.jpg" className="w-full mb-4" alt="Tommy Helfiger" />
              </div>
              <p className="font-bold text-[18px] text-white">Комплект одежды Tommy Helfiger</p>
              <p className="font-bold text-white">70 000₽</p>
            </div>
            <div>
              <div className="text-black text-center">
                <img src="src/assets/lacoste.jpg" className="w-full mb-4" alt="Lacoste" />
              </div>
              <p className="font-bold text-[18px] text-white">Комплект одежды Lacoste</p>
              <p className="font-bold text-white">90 000₽</p>
            </div>
            <div>
              <div className="text-black text-center">
                <img src="src/assets/stone.jpg" className="w-full mb-4" alt="Stone Island" />
              </div>
              <p className="font-bold text-[18px] text-white">T-shirt от Stone Island</p>
              <p className="font-bold text-white">20 000₽</p>
            </div>
          </div>
        </div>
      </div>

      {/* Секция Лучший Look для вас */}
      <div className="bg-black w-full py-12 mt-[100px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-white text-3xl font-semibold mb-8 text-center">Лучший Look для вас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-black text-center">
                <img src="src/assets/looks/1.jpg" className="w-full mb-4" alt="Look 1" />
              </div>
            </div>
            <div>
              <div className="text-black text-center">
                <img src="src/assets/looks/2.jpg" className="w-full mb-4" alt="Look 2" />
              </div>
            </div>
            <div>
              <div className="text-black text-center">
                <img src="src/assets/looks/3.jpg" className="w-full mb-4" alt="Look 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Man;