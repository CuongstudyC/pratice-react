import CallApi from "../../api/CallApi";

export  interface ImagesInsta {
  id: number;
  img:string;
}


const ImageInstagram : ImagesInsta[] = [
  {
    id:1,
    img: 'insta1.jpg'
  },
  {
    id:2,
    img: 'insta2.jpg'
  },
  {
    id:3,
    img: 'insta3.jpg'
  },
  {
    id:4,
    img: 'insta4.jpg'
  },
  {
    id:5,
    img: 'insta5.jpg'
  },
  {
    id:6,
    img: 'insta6.jpg'
  },
  {
    id:7,
    img: 'insta7.jpg'
  },
  {
    id:8,
    img: 'insta8.jpg'
  },
  {
    id:9,
    img: 'insta9.jpg'
  },
  {
    id:10,
    img: 'insta10.jpg'
  },
  {
    id:11,
    img: 'insta11.jpg'
  },
  {
    id:12,
    img: 'insta12.jpg'
  }

]

export const fetchDataInstagram = async () => {
  try {
    const data : ImagesInsta[] = await CallApi.Get("instagram");
    if(data) {
      return data;
    }
  }catch(e) {
    return undefined;
  }
  return undefined;
}

export default ImageInstagram;