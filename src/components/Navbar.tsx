import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          HEX<span>EDGE</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          </li>
          <li>
            <Link to="/suggestions" className={location.pathname === '/suggestions' ? 'active' : ''}>Suggestions</Link>
          </li>
        </ul>
        <div className="nav-cta">
          <Link to="/suggestions" className="btn-primary">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
