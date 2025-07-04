
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/PharmacyProducts.scss";

const products = [
  // Main demo products
  {
    name: "Paracetamol 500mg",
    image: "https://images.unsplash.com/photo-1588718889344-f7bd7a565d20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyYWNldGFtb2x8ZW58MHx8MHx8fDA%3D",
    price: "Ksh 200",
    desc: "Effective for mild to moderate pain and fever."
  },
  {
    name: "Ibuprofen 200mg",
    image: "https://media.istockphoto.com/id/96654524/photo/red-pills.webp?a=1&b=1&s=612x612&w=0&k=20&c=PDQUGlfKm8CdgA4kJ72e4OD2nk034JSNOpicmTMCuNY=",
    price: "Ksh 300",
    desc: "Used for pain, inflammation, and fever."
  },
  {
    name: "Vitamin C 1000mg",
    image: "https://media.istockphoto.com/id/950328388/photo/vitamin-c-in-tablets-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ahp9B8r5qFPtfQKz9nlKCp_DQobrdn-qdoGXlKSAtdY=",
    price: "Ksh 180",
    desc: "Boosts immunity and fights infections."
  },
  {
    name: "Cough Syrup",
    image: "https://media.istockphoto.com/id/471126693/photo/syrup.webp?a=1&b=1&s=612x612&w=0&k=20&c=btVx-7stUaw1kWzUaO8iRFLL5hZgxSE-fAMTNHhERKA=",
    price: "Ksh 350",
    desc: "Soothes cough and relieves throat irritation."
  },
  {
    name: "Antacid Tablets",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcHN1bGV8ZW58MHx8MHx8fDA%3D",
    price: "Ksh 120",
    desc: "Relieves heartburn and indigestion."
  },
  // Allergy & Cold
  {
    name: "Cetirizine 10mg",
    image: "https://media.istockphoto.com/id/96654524/photo/red-pills.webp?a=1&b=1&s=612x612&w=0&k=20&c=PDQUGlfKm8CdgA4kJ72e4OD2nk034JSNOpicmTMCuNY=",
    price: "Ksh 250",
    desc: "Relieves sneezing, runny nose, and allergies.",
    category: "Allergy & Cold"
  },
  {
    name: "Loratadine Syrup",
    image: "https://media.istockphoto.com/id/471126693/photo/syrup.webp?a=1&b=1&s=612x612&w=0&k=20&c=btVx-7stUaw1kWzUaO8iRFLL5hZgxSE-fAMTNHhERKA=",
    price: "Ksh 300",
    desc: "Non-drowsy antihistamine for kids and adults.",
    category: "Allergy & Cold"
  },
  // Stomach & Digestion
  {
    name: "ORS Sachets (Oral Rehydration Salts)",
    image: "https://media.istockphoto.com/id/950328388/photo/vitamin-c-in-tablets-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ahp9B8r5qFPtfQKz9nlKCp_DQobrdn-qdoGXlKSAtdY=",
    price: "Ksh 100",
    desc: "Prevents dehydration from diarrhea.",
    category: "Stomach & Digestion"
  },
  {
    name: "Loperamide (Imodium)",
    image: "https://images.unsplash.com/photo-1729704166657-9a5744b7200c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9wZXJhbWlkZSUyMChJbW9kaXVtKXxlbnwwfHwwfHx8MA%3D%3D",
    price: "Ksh 200",
    desc: "For diarrhea management.",
    category: "Stomach & Digestion"
  },
  // Infection Control
  {
    name: "Amoxicillin 500mg",
    image: "https://media.istockphoto.com/id/2096790710/photo/generic-box-and-amoxicillin-antibiotic-pills-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=ejtx1o7tcwKTt-65BN-t4EtbVILxHAhRI5gmqzzRPOg=",
    price: "Ksh 400",
    desc: "Broad-spectrum antibiotic for bacterial infections.",
    extra: "Prescription Required",
    category: "Infection Control"
  },
  {
    name: "Metronidazole 400mg",
    image: "https://media.istockphoto.com/id/520802304/photo/pills-and-capsules.webp?a=1&b=1&s=612x612&w=0&k=20&c=e9SaOZqcRIZ_6KkAz8yc0IGibmRdiPJbPwx0riboKOg=",
    price: "Ksh 350",
    desc: "Used to treat infections caused by bacteria and parasites.",
    category: "Infection Control"
  },
  // Chronic Conditions
  {
    name: "Losartan 50mg",
    image: "https://media.istockphoto.com/id/1390877847/photo/generic-box-and-blister-pack-of-atorvastatin-tablets.webp?a=1&b=1&s=612x612&w=0&k=20&c=z0Te_kjmyhysU9ZJ_hSjKotvOREWBIxhI3AkRKYoHyo=",
    price: "Ksh 600",
    desc: "For managing high blood pressure.",
    category: "Chronic Conditions"
  },
  {
    name: "Metformin 500mg",
    image: "https://media.istockphoto.com/id/1310319174/photo/generic-box-of-clarithromycin-antibiotic-tablets.webp?a=1&b=1&s=612x612&w=0&k=20&c=RZADcsgNMpRTgQ8PnLaluOiRYCZ_mQCNvqKmolkc1BI=",
    price: "Ksh 320",
    desc: "For controlling blood sugar in diabetes.",
    category: "Chronic Conditions"
  },
  // Wellness & Vitamins
  {
    name: "Zinc Tablets",
    image: "https://media.istockphoto.com/id/2194430603/photo/pills-with-zinc-zn-element-dietary-supplements-vitamin-capsules.webp?a=1&b=1&s=612x612&w=0&k=20&c=kc8WuG7Kb7Q4erwQlOOiNvnqfw5MlBuITfLKYR0N7ns=",
    price: "Ksh 150",
    desc: "Supports immune function and wound healing.",
    category: "Wellness & Vitamins"
  },
  {
    name: "Multivitamin Syrup",
    image: "https://media.istockphoto.com/id/513749902/photo/little-boy-aged-4-taking-a-medicine.webp?a=1&b=1&s=612x612&w=0&k=20&c=b91edGyu5GalLTvq4MjDTWDrRbNSVGgjQE9sBlZYq-I=",
    price: "Ksh 200",
    desc: "Boosts energy and overall wellness.",
    category: "Wellness & Vitamins"
  },
  // First Aid / Misc
  {
    name: "Hydrogen Peroxide 100ml",
    image: "https://media.istockphoto.com/id/2214588493/photo/assorted-amber-medicine-bottles-on-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=W71iggvymuzUXoNjlyfVcWOP1M6wjfoJHnrRjLIL-g0=",
    price: "Ksh 80",
    desc: "Used for cleaning wounds.",
    category: "First Aid / Misc"
  },
  {
    name: "Bandage Roll (Crepe Bandage)",
    image: "https://media.istockphoto.com/id/547422364/photo/medical-bandages-with-scissors-and-sticking-plaster.webp?a=1&b=1&s=612x612&w=0&k=20&c=7ofYSrhyaPLHtOtIhje1mnDw3hRUjskY6TamR_yh3oo=",
    price: "Ksh 90",
    desc: "For strain or sprain support.",
    category: "First Aid / Misc"
  }
];

const PharmacyProducts = () => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setMessage(`${product.name} added to cart!`);
    setTimeout(() => setMessage(""), 1500);
  };

  const handleBuyNow = (product) => {
    setMessage(`Proceeding to buy: ${product.name}`);
    setTimeout(() => setMessage(""), 1800);
    // In a real app, redirect to checkout with this product.
  };

  return (
    <section className="pharmacy-products">
      <div className="pharmacy-products__container">
        <h2 className="pharmacy-products__title">Medicines Available</h2>
        {message && (
          <div className="pharmacy-products__msg">
            {message}
          </div>
        )}
        <div className="pharmacy-products__list">
          {products.map((product) => (
            <div className="pharmacy-product" key={product.name}>
              <img src={product.image} alt={product.name} className="pharmacy-product__img" />
              <div className="pharmacy-product__info">
                <h3 className="pharmacy-product__name">{product.name}</h3>
                <p className="pharmacy-product__desc">{product.desc}</p>
                {product.extra && (
                  <div className="pharmacy-product__extra">{product.extra}</div>
                )}
                <span className="pharmacy-product__price">{product.price}</span>
                <div className="pharmacy-product__actions">
                  <button
                    className="pharmacy-product__buy-btn"
                    onClick={() => handleBuyNow(product)}
                  >
                    Buy Now
                  </button>
                  <button
                    className="pharmacy-product__cart-icon"
                    title="Add to Cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PharmacyProducts;