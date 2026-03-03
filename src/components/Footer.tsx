import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="logo">
            HEX<span>EDGE</span>
          </Link>
          <p>Elevating sports performance through elite data analytics and precision insights.</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Company</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/suggestions">Suggestions</Link>
          </div>
          <div className="link-group">
            <h4>Services</h4>
            <a href="#">Team Analytics</a>
            <a href="#">Player Scouting</a>
            <a href="#">Market Trends</a>
          </div>
          <div className="link-group">
            <h4>Connect</h4>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} HexEdge Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
