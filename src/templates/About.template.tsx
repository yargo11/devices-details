import "./About.css";

interface AboutTemplateProps {
  title: string;
  description: string;
  features: string[];
}

export function AboutTemplate({
  title,
  description,
  features,
}: AboutTemplateProps) {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">{title}</h1>
        <p className="about-description">{description}</p>

        <div className="about-section">
          <h2>Key Features</h2>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p className="mission-text">
            We believe in providing simple, efficient, and reliable solutions
            for device management. Our platform helps businesses and individuals
            keep track of their devices, monitor performance, and make
            data-driven decisions for better outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
