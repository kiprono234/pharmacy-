
import React from "react";
import "../styles/HeaderPromo.scss";

const promoImages = [
  "https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TUVESUNJTkV8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1820641054/photo/vitamins-and-supplements-variety-of-vitamin-tablets-in-a-jar-on-a-texture-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=As4V6nBw0X7zZgpOH_oUVLHxk-Dd3kCFchdye7kXl6A=",
  "https://media.istockphoto.com/id/1445826806/photo/different-organic-beauty-products.webp?a=1&b=1&s=612x612&w=0&k=20&c=XIh9wM6Gh1LqLoTP2G4ueCMVs4bcHVRramZyrJ5AC4Q=",
  "https://media.istockphoto.com/id/515829216/photo/good-bill-of-health.webp?a=1&b=1&s=612x612&w=0&k=20&c=VuP_cKyEbFb0gUSUT-BRpXfXQl-8sTOKB-TfpffTI8A=",
  "https://plus.unsplash.com/premium_photo-1680221452502-e3efca4a16d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TUVESUNBTCUyMERFVklDRVN8ZW58MHx8MHx8fDA%3D"
];

const animatedWords = [
  "MEDICINE", 
  "VITAMINS SUPPLEMENTS",
  "WELLNESS PRODUCTS",
  "BABY CARE", 
  "PERSONAL CONSULTATION", 
  "MEDICAL DEVICES"
];

const marqueeWords = [...animatedWords, ...animatedWords]; // repeat for smooth marquee

// Updated doctor image URLs
const maleDoctorImg = "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww";
const femaleDoctorImg = "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww";
const HeaderPromo = () => (
  <div className="header-promo">
    <img
      src={femaleDoctorImg}
      alt="Female Doctor"
      className="doctor-img doctor-img--right"
    />
    <div className="header-promo-center">
      <div className="image-marquee">
        <div className="marquee-track">
          {promoImages.concat(promoImages).map((img, idx) => (
            <img src={img} alt="Medical" className="marquee-img" key={idx} />
          ))}
        </div>
      </div>
      <div className="dealers-animated show-all">
        <span className="dealers-label">DEALERS IN&nbsp;</span>
        <div className="words-marquee-outer">
          <div className="words-marquee-track">
            {marqueeWords.map((word, idx) => (
              <span
                className="animated-word-show blinking-word"
                key={word + idx}
                style={{ animationDelay: `${(idx % animatedWords.length) * 0.35}s` }}
              >
                {word}
                <span className="word-separator"> &bull; </span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="promo-banner">
        <h2>Get 20% Off Your First Order!</h2>
        <p>
          Use code <span className="promo-code">WELCOME20</span> at checkout
        </p>
        {/* <button className="promo-btn">SHOP NOW</button> */}
      </div>
    </div>
    <img
      src={maleDoctorImg}
      alt="Male Doctor"
      className="doctor-img doctor-img--left"
    />
  </div>
);

export default HeaderPromo;