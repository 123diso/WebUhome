import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h4 className="footer-logo">UHome</h4>
            <p className="footer-muted">Find your place, fit your lifestyle.</p>
          </div>

          <div>
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-list">
              <li>
                <a href="#">Browse Listings</a>
              </li>
              <li>
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">Compare Options</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="footer-heading">Resources</h5>
            <ul className="footer-list">
              <li>
                <a href="#">Student Guides</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Safety Tips</a>
              </li>
              <li>
                <a href="#">Contact Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="footer-heading">Get In Touch</h5>
            <ul className="footer-list footer-muted">
              <li>info@uhome.com</li>
              <li>+1 (234) 567-890</li>
              <li>Miami, FL 33602</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-socials">
            <a href="#">F</a>
            <a href="#">T</a>
            <a href="#">I</a>
            <a href="#">L</a>
          </div>

          <div className="footer-policies">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>

        <p className="footer-copy">© 2026 UHome. All rights reserved.</p>
      </div>
    </footer>
  );
}
