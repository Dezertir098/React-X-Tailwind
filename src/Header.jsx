import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние меню

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 max-w-screen-xl">
        {/* Логотип */}
        <img className="logo h-12" src="/logo.svg" alt="Laf" />

        {/* Десктопное меню */}
        <div className="hidden md:flex space-x-8 items-center">
          <ul className="flex space-x-20 mr-[200px]">
            <li><a className="text-white hover:text-gray-400 font-semibold" href="#main">Главная</a></li>
            <li><a className="text-white hover:text-gray-400 font-semibold" href="#about_us">Мужская</a></li>
            <li><a className="text-white hover:text-gray-400 font-semibold" href="#clothes">Женская</a></li>
            <li><a className="text-white hover:text-gray-400 font-semibold" href="#contacts">Для детей</a></li>
          </ul>
          {/* Кнопка подписки (будет скрыта на мобильных устройствах) */}
          <button className="px-6 py-2 border border-white bg-black text-white text-sm rounded-[20px] hover:bg-white hover:text-black transition hidden md:block">
            Подписаться на рассылку
          </button>
        </div>

        {/* Кнопка бургер-меню для мобильных */}
        <button className="md:hidden text-white hover:text-gray-400" onClick={toggleMenu}>
          {/* Мобильная иконка меню (бургер) */}
          {isMenuOpen ? (
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-black px-6 py-4">
          <ul className="flex flex-col space-y-4">
            <li><a className="text-white hover:text-gray-400 font-semibold" href="#main" onClick={toggleMenu}>Главная</a></li>
            <li><a className="text-white hover:text-gray-400 font-semibold" href="#about_us" onClick={toggleMenu}>Мужская</a></li>
            <li><a className="text-white hover:text-gray-400 font-semibold" href="#clothes" onClick={toggleMenu}>Женская</a></li>
            <li><a className="text-white hover:text-gray-400 font-semibold" href="#contacts" onClick={toggleMenu}>Для детей</a></li>
          </ul>
          <button className="mt-6 w-full px-4 py-2 border border-white text-white rounded-[20px] hover:bg-white hover:text-black transition" onClick={toggleMenu}>
            Подписаться на рассылку
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;