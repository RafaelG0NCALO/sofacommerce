
import sofa1 from '../src/image/sofa1.png'
import sofa2 from '../src/image/sofa2.png'
import sofa3 from '../src/image/sofa3.png'
import sofa4 from '../src/image/sofa4.png'

import movel2 from '../src/image/movel2.png'
import movel3 from '../src/image/movel3.png'
import movel4 from '../src/image/movel4.png'

import movel5 from '../src/image/movel5.png'
import movel6 from '../src/image/movel6.png'
import movel7 from '../src/image/movel7.png'

import movel8 from '../src/image/movel8.png'
import movel9 from '../src/image/movel9.png'
import movel10 from '../src/image/movel10.png'

import movel11 from '../src/image/movel11.png'
import movel12 from '../src/image/movel12.png'
import movel13 from '../src/image/movel13.png'

import TableProducts from './components/TableProducts'


const App = () => {

  const info = [
    {
      CircleTitle: 'CAKE SOFA',
      CircleColor: 'bg-gradient-to-b from-orange-300 to-orange-600',
      ProductCircle: sofa1,
      position: 'top-[130px] -right-16',
      rotate: 'rotate-0',
      products: [
        { img: sofa1, title: 'sofa 1', size: '110x110' },
        { img: movel4, title: 'sofa 2', size: '210x110' },
        { img: movel2, title: 'sofa 3', size: '310x110' },
        { img: movel3, title: 'sofa 4', size: '410x110' }
      ],
    },
    {
      CircleTitle: 'BLOB SOFA',
      CircleColor: 'bg-gradient-to-r from-blue-300 to-blue-600',
      ProductCircle: sofa2,
      position: '-top-20 left-[140px] max-md:top-10',
      rotate: '-rotate-90',
      products: [
        { img: sofa2, title: 'sofa 5', size: '510x110' },
        { img: movel5, title: 'sofa 6', size: '610x110' },
        { img: movel6, title: 'sofa 7', size: '710x110' },
        { img: movel7, title: 'sofa 8', size: '810x110' }
      ],
    },
    {
      CircleTitle: 'HERB PODS',
      CircleColor: 'bg-gradient-to-t from-pink-300 to-pink-500',
      ProductCircle: sofa3,
      position: 'top-10 -left-16 ',
      rotate: 'rotate-180',
      products: [
        { img: sofa3, title: 'sofa 9', size: '910x110' },
        { img: movel8, title: 'sofa 10', size: '1010x110' },
        { img: movel9, title: 'sofa 11', size: '1110x110' },
        { img: movel10, title: 'sofa 12', size: '1210x110' }
      ],
    },
    {
      CircleTitle: 'ICED SOFA',
      CircleColor: 'bg-gradient-to-l from-yellow-200 to-yellow-500',
      ProductCircle: sofa4,
      position: '-bottom-16 left-16 max-md:-left-10 max-md:bottom-0',
      rotate: 'rotate-90',
      products: [
        { img: sofa4, title: 'sofa 13', size: '1310x110' },
        { img: movel11, title: 'sofa 14', size: '1410x110' },
        { img: movel12, title: 'sofa 15', size: '1510x110' },
        { img: movel13, title: 'sofa 16', size: '1610x110' }
      ],
    }
  ];
  
  return (
    <div className='w-full min-h-screen h-full flex justify-center items-center bg-[#E6E6E6] p-2'>
      <div className='w-full flex gap-2 max-lg:flex-wrap justify-end items-end overflow-hidden h-full max-w-7xl relative bg-gradient-to-b from-white to-gray-100 rounded-2xl '>
        <TableProducts info={info}/>
      </div>
    </div>
  );
};

export default App;
