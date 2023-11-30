import React, { useRef, useState } from "react";
import { ArrowRight, PencilSimpleLine, Plus, Ruler, UserGear } from "phosphor-react";
import icon from '../image/icon.png'

interface Product {
  img: string;
  title: string;
  size: string;
}

interface InfoItem {
  CircleTitle: string;
  CircleColor: string;
  ProductCircle: string,
  position: string,
  rotate: string,
  products: Product[];
}

  const TableProducts: React.FC<{ info: InfoItem[] }> = ({ info }) => {
  const tableRef1 = useRef<HTMLDivElement>(null);
  const tableRef2 = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const scrollRight = () => {
    setRotation((prevRotation) => prevRotation + 90);
    scrollSection(tableRef1);
    scrollSection(tableRef2);
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % info.length); // Cycle through colors
  };

  const scrollSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const currentScrollLeft = ref.current.scrollLeft;
      const scrollWidth = ref.current.scrollWidth;
      const clientWidth = ref.current.clientWidth;
      const nextScrollLeft = currentScrollLeft + clientWidth;
      const finalScrollLeft = nextScrollLeft >= scrollWidth ? 0 : nextScrollLeft;

      ref.current.scrollTo({
        left: finalScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <>

      <div className="relative h-[500px] min-w-[320px] flex flex-1">

        {info.map((infoItem, index) => (
          <div key={index} className={`${infoItem.CircleColor} absolute z-20 -top-28 -left-40  w-[600px] h-[600px] border-custom`}
            style={{ transform: `rotate(${rotation}deg)`, transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",opacity: index === currentColorIndex ? 1 : 0, }}/>
        ))}

        <div className="absolute max-md:top-5 max-md:-left-32 z-30 -left-16 top-28">
          <div ref={tableRef1} className="overflow-hidden h-40 snap-mandatory scroll-smooth flex relative w-96 snap-x">
            {info.map((info, index) => (
              <div key={index} className="flex text-center font-bold text-white text-7xl items-center justify-center w-full snap-center flex-shrink-0">
                <p className="w-10">{info.CircleTitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div
        style={{ transform: `rotate(${rotation}deg)`, transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out" }} 
        className="absolute -left-10 top-0 w-full max-w-[500px] h-[500px] z-40">
          {info.map((infoItem, index) => (
            <div 
            style={{ transition: "opacity 0.5s ease-in-out",opacity: index === currentColorIndex ? 1 : 0, }}
            key={index} className={`absolute ${infoItem.position} ${infoItem.rotate} `}>
              <img 
              style={{filter: 'drop-shadow(20px 10px 7px #111)'}}
              src={infoItem.ProductCircle} alt="" className="w-80" />
            </div>
          ))}
        </div>

      </div>

      <div className="h-[500px] flex flex-1 ml-10 mb-10 items-center max-sm:justify-center">
      <img src={icon} alt="" className="w-12 absolute top-5 right-5 z-40" />
      <div className="">
        <h1 className="text-4xl">My<br/>storehouse</h1>
        <div className="flex justify-between max-md:pr-10 pr-24 py-2 text-xs">
          <p>PRODUCT</p>
          <p>NO</p>
        </div>
        <table className="flex pr-24 max-md:pr-10">
          <div ref={tableRef2} className="flex z-20 w-full max-w-[384px] max-sm:max-w-[300px] overflow-hidden snap-mandatory scroll-smooth snap-x">
            {info.map(({ products }, tableIndex) => (
              <td key={tableIndex} className="flex w-96 max-sm:w-[300px] snap-center items-center justify-between">
                <div className="flex w-96 max-sm:w-[300px] flex-col">
                  {products.map(({ img, title, size }, productIndex) => (
                    <div key={productIndex} className="flex justify-between items-center">
                      <img src={img} alt="" className="w-16" />
                      <p className="text-md font-semibold">{title}</p>
                      <p className="text-xs">{size}</p>
                      <Plus />
                    </div>
                  ))}
                </div>
              </td>
            ))}
          </div>
          <div className="flex absolute z-10 left-0 flex-col w-full">
            <div className="w-full h-16 bg-white" />
            <div className="w-full h-16 bg-gray-100" />
            <div className="w-full h-16 bg-white" />
            <div className="w-full h-16 bg-gray-100" />
          </div>
        </table>
      </div>
      </div>

      <div className='absolute z-20 gap-10 items-center bg-white px-5 py-2 shadow-lg max-lg:right-36 max-lg:bottom-6 max-sm:right-10 rounded-full right-96 flex bottom-6'>
          <Ruler size={22} />
          <PencilSimpleLine size={22} color="blue" />
          <UserGear size={22} />
          <button
            onClick={scrollRight} className='w-14 rounded-2xl text-white h-14 flex items-center justify-center bg-gray-700'>
            <ArrowRight size={25} />
          </button>
        </div>
      
    </>
  );
};

export default TableProducts;
