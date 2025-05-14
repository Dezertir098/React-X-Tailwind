import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* Лого */}
        <div className="order-3 md:order-1">
          <img className="h-12" src="/logo.svg" alt="Laf Logo" />
        </div>

        {/* Адрес */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2">
          <div className="flex items-center gap-2">
            <img src="/gap.svg" alt="Gap Icon" className="h-5" />
            <p className="text-sm">г. Москва, Ленинградское шоссе, 13А</p>
          </div>
        </div>

        {/* Ссылки */}
        <div className="order-1 md:order-3">
          <a href="#" className="text-sm hover:underline">
            Правовая информация
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
