import { Play } from "phosphor-react";
import VideoStory from "./VideoStory";
import { useState } from "react";

export default function Story() {
  const [activeVideo, setActiveVideo] = useState<boolean>(false);

  return (
    <div className="home-story">
      <div className="home-container">
        <div className="title-story">
          <h2>Our story</h2>
          <button>See all</button>
        </div>
      </div>

      <div className="container">
        <div className="main-story">
          <img src="../../img/story1.jpg" alt="" />
          <div className="watch-video">
            <button onClick={() => setActiveVideo(true)}>Watch video  <Play size={24} /></button>
          </div>
           {
             activeVideo && <VideoStory setActiveVideo={setActiveVideo}></VideoStory>
           } 
        </div>
      </div>

    </div>
  )
}
