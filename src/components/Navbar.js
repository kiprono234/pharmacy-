
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const categories = [
  {
    label: "Over-the-Counter (OTC) Medicines",
    children: [
      "Pain Relief (paracetamol, ibuprofen)",
      "Cold & Flu",
      "Allergy & Antihistamines",
      "Digestive Health",
      "First Aid & Wound Care"
    ]
  },
  {
    label: "Prescription Medicines",
    children: [
      "Antibiotics",
      "Hypertension & Heart",
      "Diabetes",
      "Mental Health",
      "Hormonal & Birth Control"
    ]
  },
  {
    label: "Wellness & Supplements",
    children: [
      "Vitamins & Minerals",
      "Immune Support",
      "Herbal Remedies",
      "Fitness & Protein"
    ]
  },
  {
    label: "Personal Care",
    children: [
      "Skincare",
      "Haircare",
      "Oral Hygiene",
      "Feminine Hygiene"
    ]
  },
  {
    label: "Baby & Mother Care",
    children: [
      "Baby Food & Formula",
      "Diapers & Wipes",
      "Maternity Supplies"
    ]
  }
];

const services = [
  "Online Doctor Consultation",
  "Prescription Upload & Fulfillment",
  "Medicine Home Delivery",
  "Vaccination Scheduling",
  "Blood Pressure / Sugar Monitoring",
  "Health Tips / Blog",
  "Telepharmacy Chat Support"
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ category: false, services: false });

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const closeAllDropdowns = () => setDropdownOpen({ category: false, services: false });

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__brand">Logo</span>
      </div>
      <button
        className={`navbar__hamburger${menuOpen ? " active" : ""}`}
        onClick={() => {
          setMenuOpen((open) => !open);
          if (menuOpen) closeAllDropdowns();
        }}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`navbar__links${menuOpen ? " open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li className={`navbar__dropdown${dropdownOpen.category ? " open" : ""}`}>
          <button onClick={() => toggleDropdown("category")} aria-haspopup="true" aria-expanded={dropdownOpen.category}>
            Medicine Categories <span className="arrow">{dropdownOpen.category ? "▲" : "▼"}</span>
          </button>
          <ul className="navbar__submenu">
            {categories.map(cat => (
              <li key={cat.label}>
                <span>{cat.label}</span>
                {cat.children && (
                  <ul>
                    {cat.children.map(sub => (
                      <li key={sub}><span>{sub}</span></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </li>
        <li className={`navbar__dropdown${dropdownOpen.services ? " open" : ""}`}>
          <button onClick={() => toggleDropdown("services")} aria-haspopup="true" aria-expanded={dropdownOpen.services}>
            Services <span className="arrow">{dropdownOpen.services ? "▲" : "▼"}</span>
          </button>
          <ul className="navbar__submenu">
            {services.map(service => (
              <li key={service}><span>{service}</span></li>
            ))}
          </ul>
        </li>
        <li><Link to="/health-info">Health Info</Link></li>
        <li><Link to="/prescriptions">Prescriptions</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login" className="navbar__login">Login/Register</Link></li>
        <li>
          <button className="navbar__cart-btn" aria-label="View cart">
            <span role="img" aria-label="cart" className="cart-emoji">🛒</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;