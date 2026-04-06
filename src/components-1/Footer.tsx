import "../styles-1/footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-brand">
          <img src="/uhome-logo.png" alt="UHome logo" className="brand-logo" />
          <p>Find your place, fit your lifestyle.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#">Browse listings</a>
          <a href="#">How it Works</a>
          <a href="#">Compare Options</a>
          <a href="#">FAQs</a>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <a href="#">Student Guides</a>
          <a href="#">Blog</a>
          <a href="#">Safety Tips</a>
          <a href="#">Contact Support</a>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <a href="#">info@uhome.com</a>
          <a href="#">+1 (234) 561 8915</a>
          <a href="#">Opposite Ave</a>
          <a href="#">Miami FL 33002</a>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="socials">
          <span>f</span>
          <span>x</span>
          <span>◎</span>
          <span>in</span>
        </div>
        <p>© 2026 UHome. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
