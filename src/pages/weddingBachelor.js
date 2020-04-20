import React from 'react'
import { withSiteData } from 'react-static'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const imageHtml = [];
const images = importAll(require.context('../../public/bachelor-2560px', false, /\.(JPG|PNG|png|jpe?g|svg)$/));
Object.entries(images).forEach(([imageName, image]) => {
  imageHtml.push(
    <img
      className="fullscreen-photo-gallery"
      // src={"../" + image}
      src={image}
      alt={imageName}>
    </img>
  );
});


export default withSiteData(() => (
  <div className="wrapper">
    <div className="text-title-centered">
      <p className="text-title-1-black">
        K&amp;A | Bachelor
      </p>
    </div>
    <div>
      {imageHtml}
    </div>
  </div>
))
