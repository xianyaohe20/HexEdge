import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="fade-in">About <span>HexEdge</span></h1>
          <p className="fade-in">Leading the revolution in sports data analytics.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                At HexEdge, we believe that data is the most powerful tool in modern sports. 
                Our mission is to bridge the gap between raw information and actionable 
                intelligence, empowering teams and athletes to achieve their full potential.
              </p>
              <p>
                Founded by a group of sports enthusiasts and data scientists, HexEdge 
                combines cutting-edge technology with deep industry expertise to provide 
                insights that were previously unimaginable.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="glow-box"></div>
              </div>
            </div>
          </div>

          <div className="values-section">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Always pushing the boundaries of what's possible with sports data.</p>
            </div>
            <div className="value-card">
              <h3>Precision</h3>
              <p>Accuracy is at the heart of everything we do. No margin for error.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We provide honest, data-driven assessments without bias.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
