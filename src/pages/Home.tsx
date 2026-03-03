import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content fade-in">
          <div className="hero-badge">Next-Gen Sports Intelligence</div>
          <h1>Precision Data. <br /><span>Elite Performance.</span></h1>
          <p>
            HexEdge delivers world-class sports analytics and consulting services
            to teams, athletes, and organizations looking for the competitive edge.
          </p>
          <div className="hero-btns">
            <Link to="/suggestions" className="btn-primary">Get Started</Link>
            <Link to="/about" className="btn-outline">Learn More</Link>
          </div>
        </div>
        <div className="hero-glow"></div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <div className="line"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="icon">📊</div>
              <h3>Team Analytics</h3>
              <p>Deep tactical analysis and performance metrics to optimize team strategies.</p>
            </div>
            <div className="service-card">
              <div className="icon">👤</div>
              <h3>Player Scouting</h3>
              <p>Identify talent through data-driven insights and predictive modeling.</p>
            </div>
            <div className="service-card">
              <div className="icon">📈</div>
              <h3>Market Trends</h3>
              <p>Stay ahead of the game with insights into sports industry market shifts.</p>
            </div>
            <div className="service-card">
              <div className="icon">⚽</div>
              <h3>Specialized Coaching</h3>
              <p>Custom training programs backed by biomechanical analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner">
        <div className="container">
          <h2>Have a game-changing idea?</h2>
          <p>We're always looking for new ways to innovate in sports. Share your suggestions with us.</p>
          <Link to="/suggestions" className="btn-primary">Share Suggestion</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
