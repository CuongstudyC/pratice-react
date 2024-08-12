import { ArrowLeft, ArrowRight } from "phosphor-react";
import { ReadNew } from "../data/dataReadNew";
import { useState } from "react";
import ModelReadMore from "./ModelReadMore";


export default function Readme() {
  const [buttonLeftRight,setButtonLeftRight] = useState<number>(0);
  const [exploreReadMore, setExploreReadMore] = useState<boolean>(false);

  return (  
    <div className="home-container">

      <div className="read-me">


        <div className="new">
          <div className="new-wrapper">
            {
              ReadNew.map(item => (
                <div key={item.id} className="item-read-new" 
                style={{transform: `translateX(-${buttonLeftRight*100}%)`}}>
                <h2>{item.title}</h2>
                <span>{item.content}</span>
              </div>
              ))
            }       
          </div>
          <div className="button-explore">
            <div>
              <button onClick={() => setExploreReadMore(true)}>Explore more</button>
            </div>

            <div>
              <button onClick={() => setButtonLeftRight(buttonLeftRight === 0 ? ReadNew.length -1 : buttonLeftRight -1)}><ArrowLeft size={24} /></button>
              <button onClick={() => setButtonLeftRight(buttonLeftRight === ReadNew.length -1 ? 0 : buttonLeftRight +1)}><ArrowRight size={24} /></button>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="content-item">
            <div>
              <img src="../../img/readme1.jpg" alt="" />
              <span>Anim sint Lorem excepteur commodo </span>
            </div>

            <div>
              <small>Oct 12, 2022</small>
            </div>
          </div>
          <div className="content-item">
            <div>
              <img src="../../img/readme2.jpg" alt="" />
              <span>Adipisicing elit proident in elit magna deser</span>
            </div>
            <div>
              <small>Oct 12, 2022</small>
            </div>
          </div>
        </div>

        {
        exploreReadMore && <ModelReadMore 
        setReadMore={setExploreReadMore}
        Index={buttonLeftRight}
        ></ModelReadMore>
      }

      </div>


    </div>
  )
}
