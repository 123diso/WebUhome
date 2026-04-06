import '../styles/problem-section.css';

import lockIcon from '../assets/imgproblem/lock.png';
import locationIcon from '../assets/imgproblem/where_to_vote.png';
import groupIcon from '../assets/imgproblem/Group 7.png';

type Problem = {
  title: string;
  colorClass: string;
  icon: string;
};

export default function ProblemSection() {
  const problems: Problem[] = [
    {
      title: 'Is it safe?',
      colorClass: 'problem-card-blue',
      icon: lockIcon,
    },
    {
      title: 'Is it well located?',
      colorClass: 'problem-card-teal',
      icon: locationIcon,
    },
    {
      title: 'Is it worth the price?',
      colorClass: 'problem-card-orange',
      icon: groupIcon,
    },
  ];

  return (
    <section className="problem-section">
      <div className="problem-container">
        <h3 className="problem-title">The Problem</h3>

        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div key={index} className={`problem-card ${problem.colorClass}`}>
              <div className="problem-icon">
                <img src={problem.icon} alt={problem.title} />
              </div>

              <h4>{problem.title}</h4>
            </div>
          ))}
        </div>

        <p className="problem-text">
          Traditional platforms show listing. <span>UHome helps you decide.</span>
        </p>
      </div>
    </section>
  );
}
