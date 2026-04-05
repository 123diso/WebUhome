import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/property-detail.css'
import { FaBed, FaBath, FaUsers } from 'react-icons/fa'
import { PiPawPrintFill } from 'react-icons/pi'
import { IoLocationSharp } from 'react-icons/io5'
import property from '../data/properties'

function PropertyDetail() {
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

                    <p className="property-rating">{property.rating} ★ ★ ★ ★ ☆</p>
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
              <button className="action-btn">Compare</button>
            </div>
          </section>

          <section className="analyzer-section">
            <h2>Student Vibe Analyzer</h2>

            <div className="analyzer-grid">
              <div className="bars-box">
                {property.vibe.map((item, index) => (
                  <div key={index} className="bar-item">
                    <div className="bar-label">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="map-box">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=80"
                  alt="Map preview"
                  className="map-image"
                />
              </div>
            </div>
          </section>

          <section className="reviews-section">
            <h2>Reviews</h2>

            <div className="reviews-grid">
              <div className="review-pill peach-pill">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="reviewer"
                />
                <p>“Simple house but super peaceful vibe.”</p>
                <span>4.1</span>
              </div>

              <div className="review-pill lilac-pill">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="reviewer"
                />
                <p>“Quite organized and easy to live in.”</p>
                <span>4.0</span>
              </div>

              <div className="review-pill pink-pill">
                <img
                  src="https://randomuser.me/api/portraits/women/29.jpg"
                  alt="reviewer"
                />
                <p>“Top room and friendly environment.”</p>
                <span>3.9</span>
              </div>

              <div className="review-pill yellow-pill">
                <img
                  src="https://randomuser.me/api/portraits/women/52.jpg"
                  alt="reviewer"
                />
                <p>“Simple house rules and peaceful vibe.”</p>
                <span>4.1</span>
              </div>

              <div className="review-pill blue-pill">
                <img
                  src="https://randomuser.me/api/portraits/men/16.jpg"
                  alt="reviewer"
                />
                <p>“Simple house rules and peaceful vibe.”</p>
                <span>4.1</span>
              </div>

              <div className="review-pill red-pill">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="reviewer"
                />
                <p>“State organized and easy to live in.”</p>
                <span>4.0</span>
              </div>

              <div className="review-pill green-pill">
                <img
                  src="https://randomuser.me/api/portraits/men/71.jpg"
                  alt="reviewer"
                />
                <p>“Cozy room and friendly environment.”</p>
                <span>3.9</span>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default PropertyDetail