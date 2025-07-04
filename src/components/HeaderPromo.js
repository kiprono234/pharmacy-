
import React from "react";
import "../styles/HeaderPromo.scss";

const promoImages = [
  "https://plus.unsplash.com/premium_photo-1670459707372-714da6100992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZGljaW5lJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1709813610121-e2a51545e212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljaW5lJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1670793333165-49f432507e34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZGljaW5lJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1687900531763-f4c9c7b99dca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNpbmUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
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

const HeaderPromo = () => (
  <div className="header-promo">
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
      <button className="promo-btn">SHOP NOW</button>
    </div>
  </div>
);

export default HeaderPromo;