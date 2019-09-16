import React from 'react'
import { withSiteData } from 'react-static'
import bgImg1 from '../../public/ka_engagement_1.jpg'


export default withSiteData(() => (
  <div className="wrapper">
    <div className="main-div">
      <div className="bg-banner bg-white"></div>
      <img className="bg-1" id="wedding-videos-bg-img-1" src={bgImg1} alt=""></img>
      <div className="bg-2" style={{top: "0"}}>
        <p className="text-title-2" style={{fontSize: "50px"}}>
          <a target="_blank" href="https://www.youtube.com/watch?v=v0_MzXV6gUw" style={{color: "white"}}>Wedding Slideshow</a>
        </p>
        <div style={{paddingTop: "10px"}}>
        <div className="video"
            style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
            }}
            >
            <iframe
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
                src={"https://www.youtube.com/embed/v0_MzXV6gUw"}
                frameBorder="0"
                gesture="media"
                allow="autoplay; encrypted-media"
            />
        </div>
       </div>
      </div>
   </div>
  </div>
))
