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

  )
}

export default PropertyDetail