import React from 'react'
import { withSiteData } from 'react-static'
import bgImg1 from '../../public/grace_typewriter.jpg'
import bgImg3 from '../../public/ka_white.png'
import styled from 'styled-components'



const Cards = styled.div`
  display: flex;
  flex-align: stretch;
  justify-content: stretch;
  flex-wrap: wrap;
  width: 300px;
  max-width: 95%;
  margin: auto;
`

const Card = styled.a`
  flex: 1 1 150px;
  border: 1px rgb(0,0,0,1);
  background: rgb(0,0,0,0.8);
  color: white;
  border-radius: 5px;
  padding: 2vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px;
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

export default withSiteData(() => (
  <div className="wrapper">
    <div className="main-div">
      <div className="bg-banner bg-white"></div>
      <div className="text-title">
        <p className="text-title-1">
          K&amp;A
        </p>
        <p className="text-title-2">
          Friday<br/>
          Sept. 13th<br/>
          2019
        </p>
      </div>
      <img className="bg-1" id="homepage-bg-img-1" src={bgImg1} alt=""></img>
      <div className="bg-2 bg-white">
        <div className="padded-div">
          <div className="text-body-1">
            <p>
              Hey, welcome to our wedding page! 
              We had a lot of fun typing out the invitations and look forward to celebrating with everyone this September. 
              <br/>
              <br/>
              RSVP not available quite yet as we're still deciding on the dinner menu... please check back in a few weeks. 
            </p>
          </div>
          <Cards className="wedding-cards">
            <Card href="/" target="_blank" >
              <InnerCard>RSVP 💌</InnerCard>
            </Card>
          </Cards>
        </div>
      </div>
    </div>
    <div className="main-div">
      <div className="bg-3">
        <img id="homepage-bg-img-3" src={bgImg3} alt=""></img>
      </div>
    </div>
  </div>
))
