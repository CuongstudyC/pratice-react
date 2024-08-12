// import { faker } from '@faker-js/faker';
import { CaretLeft, CaretRight } from 'phosphor-react';
import {  useEffect, useState } from 'react';
import CallApi from '../../api/CallApi';


export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  buttonClick?: () => void;
  img: string;
  buttonContent: string;
}

export interface CarouseArray {
  items: CarouselItem[];
}


// const Carouse: CarouseArray = {
//   items: Array(7).fill(null).map(() => (
//     {
//       id: ((Math.random() * 10) + 1),
//       title: faker.lorem.words({ min: 2, max: 4 }),
//       description: faker.word.words({ count: { min: 10, max: 15 } }),
//       buttonClick() {
//         alert("1234");
//       },
//       img: faker.image.url({ width: 1441, height: 600 }),
//       buttonContent: faker.lorem.words({ min: 1, max: 1 })
//     }
//   ))

// }

export function CarouseItem(props: CarouselItem) {
  const { title, img, description, buttonContent} = props;
  const buttonClick = () => {
    alert(123);
  }
  return (
    <div className="carouseItem"  >
      <img src={img} alt="" />
      <div className="carouse-content">
        <div>
          <h2>{title}</h2>
          <span>{description}</span>
          <button onClick={() => buttonClick()}>{buttonContent}</button>
        </div>

      </div>
    </div>
  )
}

export default function Title() {
  const [Carouse, setCarouse] = useState<CarouselItem[] | undefined>(undefined);
  const fetchData =  async () => {
    try {
      const data = await CallApi.Get("carousel");
      if(data) {
        setCarouse(data);
      }
    }catch(e) {
      return undefined;
    }
    return undefined;
  }
  useEffect(() => {
    fetchData();
  },[])

  // const { items } = Carouse;
  const [activeOval, setActiveOval] = useState<number>(Carouse ? Carouse[0].id : 1);
  const activeIndex: number = Carouse ? Carouse.findIndex(item => item.id === activeOval) : 1;
  
  const hangleClickCausole = (position: string) => {
    switch (position) {
      case "left":
        setActiveOval((activeIndex === 0) ?(Carouse ? Carouse[Carouse.length - 1].id  : 1):(Carouse ? Carouse[activeIndex - 1].id : 1));

        break;
      case "right":
        setActiveOval((activeIndex ===(Carouse ? Carouse.length - 1 : 1)) ?(Carouse ? Carouse[0].id : 1): (Carouse ? Carouse[activeIndex + 1].id : 1));
        break;
    }
  }

  return (
    <div className='carouse-wrapper'>
      <div className="carouseList" style={{ width: `${Carouse ? Carouse.length * 100 : 100}%`, transform: `translateX(-${activeIndex * 100 /(Carouse ?Carouse.length : 1)}%)` }}>
        {
          Carouse && Carouse.map(item => <CarouseItem {...item} key={item.id}></CarouseItem>)
        }
      </div>

      <div className='carouseOval-group'>
        {
          Carouse &&  Carouse.map((item) =>
            <div key={item.id} className={`oval${activeOval === item.id ? ' active' : ''}`}
              onClick={() => setActiveOval(item.id)}></div>)
        }
      </div>
      <div className='left-right-group'>

        <button onClick={() => hangleClickCausole("left")}><CaretLeft size={32} /></button>
        <button onClick={() => hangleClickCausole("right")}><CaretRight size={32} /></button>
      </div>
    </div>
  )
}
