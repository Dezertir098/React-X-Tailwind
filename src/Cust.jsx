import React from 'react';

const Cust = () => {
  return (
    <div className="bg-black w-full py-12 mt-[100px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-white text-3xl font-semibold mb-8 text-center">Лучший Look для вас</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
                <div className="text-black text-center">
                    <img src="/assets/looks/1.jpg" className="w-full mb-4" />
                </div>
            </div>
            <div>
                <div className="text-black text-center">
                    <img src="/assets/looks/2.jpg" className="w-full mb-4" />
                </div>
            </div>
            <div>
                <div className="text-black text-center">
                    <img src="/assets/looks/3.jpg" className="w-full mb-4" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cust;