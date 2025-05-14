import React from 'react';

const Form = () => {
  return (
<div className="bg-white w-full py-12 mb-[35px]">
  <div className="max-w-[1200px] mx-auto px-4">
    <h2 className="text-black text-3xl font-semibold mb-8 text-center">
      Подпишитесь на рассылку
    </h2>

    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      {/* Левая часть - изображение */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <img
          className="w-full max-w-full object-cover"
          src="/assets/form_promo.jpg"
          alt="Промо"
        />
      </div>

      {/* Правая часть - форма */}
      <div className="w-full lg:w-1/2 lg:ml-[75px] flex flex-col items-center">
        <img className="mb-6" alt="Laf" src="/logo.svg" />

        <p className="text-black text-xl md:text-2xl text-center lg:text-left font-bold">
          Будьте всегда в тренде и <br /> в курсе последних новостей
        </p>

        <input
          placeholder="Email"
          type="email"
          className="w-[250px] sm:w-[400px] bg-gray-100 mt-10 text-black px-4 py-2 border-0 border-b border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <label className="flex items-center mt-6 space-x-2 cursor-pointer select-none text-sm text-gray-700">
          <input
            type="checkbox"
            className="mt-1 w-5 h-5 border border-black bg-white accent-black rounded-sm focus:ring-0 focus:outline-none"
          />
          <span>
            Я согласен с{" "}
            <span className="underline decoration-1">
              условиями обработки персональных данных
            </span>
          </span>
        </label>

        <button className="px-6 py-2 border border-black bg-white text-black text-sm rounded-[20px] hover:bg-black hover:text-white transition mt-6">
          Подписаться на рассылку
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Form;