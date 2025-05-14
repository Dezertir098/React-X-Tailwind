import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    // Проверяем, подключён ли скрипт
    const existingScript = document.querySelector('script[src^="https://api-maps.yandex.ru/2.1/"]');

    const initMap = () => {
      if (window.ymaps && document.getElementById('map') && !document.getElementById('map').dataset.initialized) {
        window.ymaps.ready(() => {
          const map = new window.ymaps.Map('map', {
            center: [55.818235, 37.496201],
            zoom: 15,
          });

          const placemark = new window.ymaps.Placemark([55.818235, 37.496201], {
            hintContent: 'г. Москва Ленинградское шоссе, 13А',
            balloonContent: 'г. Москва Ленинградское шоссе, 13А',
          });

          map.geoObjects.add(placemark);
          // Помечаем, что карта инициализирована
          document.getElementById('map').dataset.initialized = 'true';
        });
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=YOUR_API_KEY";
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="bg-white w-full py-12 mt-[100px] mb-[100px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-black text-3xl font-semibold mb-8 text-center">Наши магазины</h2>
        <div id="map" className="w-full h-[500px] mb-4"></div>
      </div>
    </div>
  );
};

export default Map;