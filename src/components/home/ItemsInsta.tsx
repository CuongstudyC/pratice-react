import { ImagesInsta } from "../data/dataImgInsta";


export default function ItemsInsta(props: ImagesInsta) {
  const {img} = props;
  return (
    <div className="insta-item" style={{flex:`${100 / 6.5}%`}}>
          <img src={`../../img/${img}`} alt="" />
    </div>
  )
}
