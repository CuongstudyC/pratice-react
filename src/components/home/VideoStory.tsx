
export default function VideoStory({setActiveVideo} : {setActiveVideo(active : boolean): void}) {
  return (
    <div className="video-container">
      <div className="video-item">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tfOFL2soPO4" title="Lúc đó tôi đã chuyển sinh thành Slime Season 3 - Tập 64 [Việt sub]" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <button onClick={() => setActiveVideo(false)}>x</button>
      </div>

    </div>
  )
}
