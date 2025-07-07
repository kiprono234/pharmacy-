
// import React from "react";
// import "./Home.scss";
// import { useNavigate } from "react-router-dom";

// const promoImages = [
//   "https://plus.unsplash.com/premium_photo-1670459707372-714da6100992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZGljaW5lJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
//   "https://images.unsplash.com/photo-1709813610121-e2a51545e212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljaW5lJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
// ];

// const popularCategories = [
//   { label: "Pain Relief", icon: "💊" },
//   { label: "Cold & Flu", icon: "🤧" },
//   { label: "Baby Care", icon: "🍼" },
//   { label: "Wellness & Supplements", icon: "🍃" },
// ];

// const currentOffers = [
//   { code: "SAVE15", desc: "15% off on Pain Relief medicines", expires: "Today only!" },
//   { code: "WELLNESS20", desc: "20% off Wellness & Supplements", expires: "Ends Sunday" },
// ];

// const healthServices = [
//   { label: "Book a Consultation", icon: "📞", route: "/consultation" },
//   { label: "Upload a Prescription", icon: "📤", route: "/upload-prescription" },
//   { label: "Refill Prescription", icon: "🔄", route: "/refill" },
//   { label: "Schedule Vaccination", icon: "💉", route: "/vaccination" },
// ];

// const topProducts = [
//   { name: "Paracetamol 500mg", price: "4.99", img: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=200" },
//   { name: "Vitamin C Tablets", price: "7.99", img: "https://plus.unsplash.com/premium_photo-1670793333165-49f432507e34?w=200" },
//   { name: "Baby Lotion", price: "6.49", img: "https://plus.unsplash.com/premium_photo-1687900531763-f4c9c7b99dca?w=200" },
//   { name: "Protein Powder", price: "19.99", img: "https://images.unsplash.com/photo-1709813610121-e2a51545e212?w=200" },
// ];

// const trustSignals = [
//   { icon: "✅", text: "Licensed Pharmacy" },
//   { icon: "👥", text: "Trusted by 5,000+ Customers" },
//   { icon: "⏰", text: "24/7 Support" },
// ];

// const blogPreviews = [
//   { title: "How to Manage Allergies", snippet: "Tips for allergy relief and prevention.", link: "#" },
//   { title: "Diabetes Care Guide", snippet: "Best practices for daily diabetes management.", link: "#" },
// ];

// export default function Home() {
//   const navigate = useNavigate();

//   const handleShopNow = () => {
//     navigate("/products");
//   };

//   const handleConsultDoctor = () => {
//     navigate("/consultation");
//   };

//   const handleUploadPrescription = () => {
//     navigate("/upload-prescription");
//   };

//   // Function to handle other health service clicks
//   const handleServiceClick = (route) => {
//     navigate(route);
//   };

//   return (
//     <div className="home-page">

//       {/* Hero Banner / Promo Section */}
//       <section className="hero-banner">
//         <div className="hero-imgs">
//           {promoImages.map((img, i) => (
//             <img src={img} alt="Promo Visual" key={i} className="hero-img" />
//           ))}
//         </div>
//         <div className="hero-content">
//           <h1>Your Health, Our Priority</h1>
//           <p>Get medicines, wellness products, and healthcare services at your fingertips.</p>
//           <div className="cta-buttons">
//             <button className="cta shop-now" onClick={handleShopNow}>Shop Now</button>
//             <button className="cta consult" onClick={handleConsultDoctor}>Consult a Doctor</button>
//             <button className="cta upload" onClick={handleUploadPrescription}>Upload Prescription</button>
//           </div>
//         </div>
//       </section>

//       {/* Search Bar */}
//       <section className="searchbar-section">
//         <input
//           className="searchbar"
//           type="text"
//           placeholder="Search for medicines, health products, or services…"
//         />
//         <button className="search-btn">Search</button>
//       </section>

//       {/* Popular Categories */}
//       <section className="categories-section">
//         <h2>Popular Categories</h2>
//         <div className="categories-list">
//           {popularCategories.map(cat => (
//             <div className="category-card" key={cat.label}>
//               <span className="cat-icon">{cat.icon}</span>
//               <span className="cat-label">{cat.label}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Current Offers / Discounts */}
//       <section className="offers-section">
//         <h2>Current Offers</h2>
//         <div className="offers-list">
//           {currentOffers.map(offer => (
//             <div className="offer-card" key={offer.code}>
//               <div className="offer-code">{offer.code}</div>
//               <div className="offer-desc">{offer.desc}</div>
//               <div className="offer-expiry">{offer.expires}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Health Services Section */}
//       <section className="services-section">
//         <h2>Health Services</h2>
//         <div className="services-list">
//           {healthServices.map(s => (
//             <button
//               className="service-card"
//               key={s.label}
//               onClick={() => handleServiceClick(s.route)}
//               type="button"
//             >
//               <span className="service-icon">{s.icon}</span>
//               <span className="service-label">{s.label}</span>
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Top Products / New Arrivals */}
//       <section className="top-products-section">
//         <h2>Top Products & New Arrivals</h2>
//         <div className="products-list">
//           {topProducts.map(p => (
//             <div className="product-card" key={p.name}>
//               <img src={p.img} alt={p.name} className="product-img" />
//               <div className="product-info">
//                 <div className="product-name">{p.name}</div>
//                 <div className="product-price">${p.price}</div>
//                 <button className="add-cart-btn">Add to Cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Trust Signals */}
//       <section className="trust-section">
//         <div className="trust-list">
//           {trustSignals.map(t => (
//             <div className="trust-card" key={t.text}>
//               <span className="trust-icon">{t.icon}</span>
//               <span className="trust-text">{t.text}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Newsletter Signup */}
//       <section className="newsletter-section">
//         <h2>Subscribe for Health Tips & Exclusive Offers</h2>
//         <form className="newsletter-form">
//           <input type="email" placeholder="Enter your email" required />
//           <button type="submit" className="newsletter-btn">Subscribe</button>
//         </form>
//       </section>

//       {/* Blog / Health Tips Preview */}
//       <section className="blog-section">
//         <h2>Health Tips & Blog</h2>
//         <div className="blog-list">
//           {blogPreviews.map(post => (
//             <a href={post.link} className="blog-card" key={post.title}>
//               <div className="blog-title">{post.title}</div>
//               <div className="blog-snippet">{post.snippet}</div>
//             </a>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }