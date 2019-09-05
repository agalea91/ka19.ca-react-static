import React from 'react'
import { withSiteData } from 'react-static'
import bgImg1 from '../../public/ka_engagement_1.jpg'
import bgImg3 from '../../public/rose_white.png'
import styled from 'styled-components'
import { Link } from '@reach/router'


const Cards = styled.div`
  min-width: 30%;
  max-width: 90%;
  margin: auto;
`

const Card = styled.a`
  flex: 1 1 150px;
  border: 1px rgb(0,0,0,0.2);
  background: rgb(0,0,0,0.3);
  color: white;
  border-radius: 5px;
  padding: 2vh 2vw;
  max-width: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 5vh;
  font-weight: 100;
  font-size: 30px;
  cursor: pointer;
  transition: 0.1s ease-out;
  white-space: nowrap;
  :hover {
    transform: translate(3px, 0px);
    box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.2);
  }` 

const LinkCard = styled(Link)`
  flex: 1 1 150px;
  border: 1px rgb(0,0,0,0.2);
  background: rgb(0,0,0,0.3);
  color: white;
  border-radius: 5px;
  padding: 2vh 2vw;
  max-width: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 5vh;
  font-weight: 100;
  font-size: 30px;
  cursor: pointer;
  transition: 0.1s ease-out;
  white-space: nowrap;
  :hover {
    transform: translate(3px, 0px);
    box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.2);
  }
`

const InnerCard = styled.div`
  width: 100%;
  height: 100%
`

const BgBlock = styled.div`
  /* Size */
  width: 100%;
  height: ${props => props.height};
  /* Position */
  position: absolute;
  top: ${props => props.top};
  left: 0;
`

const Image = styled.img`
  opacity: 1;
  /* Size */
  width: 200px;
  height: auto;
  /* Position */
  position: relative;
  padding: 10vh;
  margin: auto;
`

export default withSiteData(() => (
  <div className="wrapper">
    <div className="main-div">
      <div className="bg-banner bg-white"></div>
      {/* <div className="text-title">
        <p className="text-title-1">
          K&amp;A | Videos
        </p>
        <p className="text-title-2">
          Videos
        </p>
      </div> */}
      <img className="bg-1" id="homepage-bg-img-1" src={bgImg1} alt=""></img>
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
