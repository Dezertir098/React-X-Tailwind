import React, { useState } from 'react';
// import './header.css'; // Подключим стили
// import Button from './button';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Состояние меню

  // Функция для переключения состояния меню на мобильных устройствах
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50" id="header">
  <div className="container mx-auto flex justify-between items-center py-4 px-6" style={{ maxWidth: '1200px' }}>
    {/* Логотип */}
    <img className="logo h-12" src="public\logo.svg" alt="Laf" />

    {/* Меню */}
    <div className={`menu ${isMenuOpen ? 'open' : ''} hidden md:block`}>
      <ul className="flex space-x-6">
        <li><a className="menu_text text-white hover:text-gray-600" href="#main">Главная</a></li>
        <li><a className="menu_text text-white hover:text-gray-600" href="#about_us">О нас</a></li>
        <li><a className="menu_text text-white hover:text-gray-600" href="#clothes">Товары</a></li>
        <li><a className="menu_text text-white hover:text-gray-600" href="#contacts">Контакты</a></li>
      </ul>
    </div>

    {/* Дополнительное меню */}
    <div className={`menu ${isMenuOpen ? 'open' : ''} hidden md:block`}>
      <ul className="flex space-x-6">
        <img src="public/search.svg" alt="Search" className="h-6 mr-2"/>
        <li><a className="menu_text text-white hover:text-gray-600" href="#search">Поиск</a></li>
        <li><a className="menu_text text-white hover:text-gray-600" href="#auth">Авторизация</a></li>
      </ul>
    </div>

    {/* Мобильное меню */}
    <button className="md:hidden text-white hover:text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
    </button>
  </div>
</header>


  );
}

export default Header;
