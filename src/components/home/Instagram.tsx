import { useEffect, useState } from 'react';
import { fetchDataInstagram, ImagesInsta } from '../data/dataImgInsta';
import ItemsInsta from './ItemsInsta';


export default function Instagram() {
  const [ImageInstagram, setImageInstagram] = useState<ImagesInsta[] | undefined>(undefined);
  const fetchData  = async () => {
    setImageInstagram(await fetchDataInstagram());
  }
  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="home-instagram">
        <div className="home-container">
            <h2>Instagram</h2>
            <span>@yourinstagram_offical</span>
            <div className="instagram-wrapper">
                  {
                   ImageInstagram && ImageInstagram.map(item => <ItemsInsta {...item} key={item.id}></ItemsInsta>)
                  }
            </div>
        </div>
    </div>
  )
}
