import Navbar from "../components-1/Navbar";
import Footer from "../component/Footer";
import "../styles-1/property-detail.css";
import { FaBed, FaBath, FaUsers } from "react-icons/fa";
import { PiPawPrintFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import property from "../data/properties";
import { useNavigate } from "react-router-dom";

function PropertyDetail() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="app-shell">
        <main className="main-card">
          <Navbar />

          <div className="back-row">
            <button className="back-btn">←</button>
            <span>Lets keep searching</span>
          </div>

          <section className="property-card">
            <div className="property-main">
              <div className="property-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                  alt="Cozy shared house"
                  className="property-image"
                />

                <div className="property-features-row">
                  <span className="feature-label">Features</span>

                  <div className="mini-icons">
                    <span className="mini-tag">
                      <FaBed />
                    </span>
                    <span className="mini-tag orange">
                      <FaBath />
                    </span>
                    <span className="mini-tag green">
                      <FaUsers />
                    </span>
                    <span className="mini-tag pink">
                      <PiPawPrintFill />
                    </span>
                  </div>
                </div>
              </div>

              <div className="property-info">
                <div className="property-header">
                  <div>
                    <h1 className="property-title">{property.title}</h1>

                    <div className="property-location">
                      <IoLocationSharp />
                      <span>{property.location}</span>
                    </div>

                    <p className="property-rating">
                      {property.rating} ★ ★ ★ ★ ☆
                    </p>
                  </div>

                  <div className="match-badge">
                    <div className="match-circle">☺</div>
                    <span>A good match</span>
                  </div>
                </div>

                <div className="price-line">{property.roomType}</div>

                {property.description.map((text, index) => (
                  <p key={index} className="property-description">
                    {text}
                  </p>
                ))}

                <div className="details-columns">
                  <div className="detail-block">
                    <h3>Features</h3>
                    <ul>
                      {property.features.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-block">
                    <h3>Included Amenities</h3>
                    <ul>
                      {property.amenities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-block">
                    <h3>Lease & Conditions</h3>
                    <ul>
                      {property.lease.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="property-actions">
              <button className="action-btn">Contact</button>

              <button
                className="action-btn"
                onClick={() => navigate("/start/favorites")}
              >
                Compare
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default PropertyDetail;
