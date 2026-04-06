import '../styles/features-section.css';

import frame1 from '../assets/imgfeatures/Frame 1.png';
import frame2 from '../assets/imgfeatures/Frame 2.png';
import frame3 from '../assets/imgfeatures/Frame3.png';
import frame4 from '../assets/imgfeatures/Frame 4.png';

import shoppingIcon from '../assets/imgfeatures/shoppingmode1.png';
import hiveIcon from '../assets/imgfeatures/hive2.png';
import groupIcon from '../assets/imgfeatures/group3.png';
import group2Icon from '../assets/imgfeatures/group4.png';

type Feature = {
  title: string;
  description: string;
  colorClass: string;
  image: string;
  icon: string;
};

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      title: 'Smart Search',
      description: 'Dynamic filters by price, neighborhood, and type.',
      colorClass: 'feature-top-teal',
      image: frame1,
      icon: shoppingIcon,
    },
    {
      title: 'Student Vibe Analyzer',
      description: 'Real student lifestyle insights around your campus.',
      colorClass: 'feature-top-blue',
      image: frame2,
      icon: hiveIcon,
    },
    {
      title: 'Compare Options',
      description: 'Side-by-side comparison system for 2–3 listings.',
      colorClass: 'feature-top-orange',
      image: frame3,
      icon: groupIcon,
    },
    {
      title: 'Student Reviews',
      description: 'Real-time ratings from other students.',
      colorClass: 'feature-top-pink',
      image: frame4,
      icon: group2Icon,
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <h3 className="features-title">Core Features</h3>

        <div className="features-grid">
          {features.map((feature, index) => (
            <article key={index} className="feature-card">
              <div className={`feature-top ${feature.colorClass}`}>
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="feature-icon"
                />

                <img
                  src={feature.image}
                  alt={`${feature.title} preview`}
                  className="feature-image"
                />
              </div>

              <div className="feature-body">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
