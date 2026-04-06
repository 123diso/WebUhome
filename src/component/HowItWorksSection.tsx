import '../styles/how-it-works-section.css';
import linePath from '../assets/Vector 24.png';

type Step = {
  number: string;
  title: string;
  colorClass: string;
  positionClass: string;
};

export default function HowItWorksSection() {
  const steps: Step[] = [
    {
      number: '1',
      title: 'Create your profile',
      colorClass: 'step-blue',
      positionClass: 'step-position-left',
    },
    {
      number: '2',
      title: 'Set your priorities',
      colorClass: 'step-teal',
      positionClass: 'step-position-center',
    },
    {
      number: '3',
      title: 'Compare and choose',
      colorClass: 'step-orange',
      positionClass: 'step-position-right',
    },
  ];

  return (
    <section id="how-it-works" className="how-section">
      <div className="how-container">
        <h3 className="how-title">How It works?</h3>

        <div className="how-visual">
          <img src={linePath} alt="path line" className="how-line" />

          {steps.map((step, index) => (
            <div key={index} className={`how-step ${step.positionClass}`}>
              <div className={`how-step-circle ${step.colorClass}`}>{step.number}</div>

              <div className="how-step-label">
                <p>{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
