import React from 'react'
import { withSiteData } from 'react-static'
import bgImg1 from '../../public/whistler_climb.jpg'
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px;
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

const LinkCard = styled(Link)`
  flex: 1 1 150px;
  border: 1px rgb(0,0,0,0.2);
  background: rgb(0,0,0,0.3);
  color: white;
  border-radius: 5px;
  padding: 2vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px;
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

export default withSiteData(() => (
  <div className="main-div">
    <div className="bg-banner bg-white"></div>
    <div className="text-title">
      <p className="text-title-1">
        K&amp;A
      </p>
      <p className="text-title-2">
        2019 | &infin;
      </p>
    </div>
    <img className="bg-1" id="homepage-bg-img-1" src={bgImg1} alt=""></img>
    <div className="bg-2">
      <div className="padded-div">
        <Cards>
          <LinkCard to="/wedding">
            <InnerCard>Wedding 👰</InnerCard>
          </LinkCard>
          <Card href="https://kavacay.wordpress.com/" target="_blank" >
            <InnerCard>Vacay 🌴</InnerCard>
          </Card>
        </Cards>
      </div>
    </div>
  </div>
))
