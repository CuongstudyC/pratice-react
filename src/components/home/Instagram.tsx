import ImageInstagram from '../data/dataImgInsta';
import ItemsInsta from './ItemsInsta';

export default function Instagram() {
  return (
    <div className="home-instagram">
        <div className="home-container">
            <h2>Instagram</h2>
            <span>@yourinstagram_offical</span>
            <div className="instagram-wrapper">
                  {
                    ImageInstagram.map(item => <ItemsInsta {...item} key={item.id}></ItemsInsta>)
                  }
            </div>
        </div>
    </div>
  )
}
