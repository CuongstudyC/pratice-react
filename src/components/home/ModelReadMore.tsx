import { ReadNew } from "../data/dataReadNew"

export default function ModelReadMore({setReadMore, Index} : 
  {setReadMore(readmore : boolean) :void, Index: number}) {
    
  return (
    <div className="Explore-read-more">
        <div className="read-more-item">
              <h2>{ReadNew[Index].title}</h2>
              <span>{ReadNew[Index].fullContent}</span>
        </div>
        <div className="close" onClick={() => setReadMore(false)}>
          <button>x</button>
        </div>
    </div>
  )
}
