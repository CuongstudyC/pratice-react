import {  ReadNewType } from '../data/dataReadNew';

export default function ModelReadMore({setReadMore, ReadNew,  Index} : 
  {setReadMore(readmore : boolean) :void, Index: number, ReadNew : ReadNewType[] | undefined}) { 
    
  return (
    <div className="Explore-read-more">
        <div className="read-more-item">
              <h2>{ReadNew ? ReadNew[Index ].title : ''}</h2>
              <span>{ReadNew ? ReadNew[Index].fullContent: ''}</span>
        </div>
        <div className="close" onClick={() => setReadMore(false)}>
          <button>x</button>
        </div>
    </div>
  )
}
