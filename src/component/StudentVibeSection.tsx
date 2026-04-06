import '../styles/student-vibe-section.css';

export default function StudentVibeSection() {
  const vibeItems = [
    {
      text: 'Percentage of students living nearby',
      className: 'vibe-pill-blue',
    },
    {
      text: 'Access to essential services',
      className: 'vibe-pill-pink',
    },
    {
      text: 'Quietness and study-friendliness',
      className: 'vibe-pill-green',
    },
    {
      text: 'Nearby cafés and study spots',
      className: 'vibe-pill-red',
    },
    {
      text: 'Nightlife activity level',
      className: 'vibe-pill-purple',
    },
  ];

  return (
    <section className="student-vibe-section">
      <div className="student-vibe-container">
        <div className="student-vibe-left">
          <h3>What is the Student Vibe Analyzer?</h3>

          <p>
            The Student Vibe Analyzer is a lifestyle-based indicator that helps students
            understand the environment around a property — beyond just distance or price.
          </p>

          <p>
            Instead of only showing how far a place is from campus, it analyzes the
            atmosphere of the area and how well it fits a student’s daily life.
          </p>
        </div>

        <div className="student-vibe-right">
          {vibeItems.map((item, index) => (
            <div key={index} className={`vibe-pill ${item.className}`}>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
