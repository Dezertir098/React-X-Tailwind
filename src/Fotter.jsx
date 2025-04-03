import React, { useState } from 'react';
// import './fotter.css'; // Подключим стили
// import Button from './button';

function Fotter() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Состояние меню

  // Функция для переключения состояния меню на мобильных устройствах
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <footer className="bg-black text-white py-6 w-full" id="footer" style={{ margin: '0 auto', position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6" style={{ maxWidth: '1200px' }}>
    <div className="flex items-center space-x-6 w-full" style={{ maxWidth: '1200px' }}>
      <div className="flex flex-col items-center text-center md:text-left space-y-2">
        <p className="text-lg whitespace-nowrap">Правовая информация</p>
      </div>

      <div className="flex justify-center w-full mt-4">
        <div className="flex items-center justify-center space-x-2">
          <img src="/gap.svg" alt="Gap Icon" className="h-6" />
          <p>г. Москва, Ленинградское шоссе, 13А</p>
        </div>
      </div>

      <div className="flex justify-center md:justify-start">
        <img className="logo h-12" src="/logo.svg" alt="Laf Logo" />
      </div>
    </div>
  </div>
</footer>
  );
}

export default Fotter;
