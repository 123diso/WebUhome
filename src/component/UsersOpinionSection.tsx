import '../styles/users-opinion-section.css';

export default function UsersOpinionSection() {
  const opinions = [
    {
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      text: '"I love how clear the listings are. It saved me so much time."',
      className: 'opinion-green opinion-1',
    },
    {
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
      text: '"This app helped me find a place that truly fits my needs."',
      className: 'opinion-beige opinion-2',
    },
    {
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      text: '"This app made finding a room near Harvard so much easier and faster."',
      className: 'opinion-red opinion-3',
    },
    {
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      text: '"I moved in within a week thanks to this app!"',
      className: 'opinion-blue opinion-4',
    },
    {
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      text: '"Spacious room and plenty of privacy."',
      className: 'opinion-salmon opinion-5',
    },
    {
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      text: '"It turned a complicated search into a simple experience."',
      className: 'opinion-pink opinion-6',
    },
    {
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      text: '"I love how easy it is to navigate."',
      className: 'opinion-purple opinion-7',
    },
    {
      image:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80',
      text: '"I appreciated how detailed and transparent the listings were."',
      className: 'opinion-lilac opinion-8',
    },
  ];

  return (
    <section id="opinions" className="users-opinion-section">
      <div className="users-opinion-container">
        <div className="users-opinion-stage">
          <div className="users-opinion-title-wrap">
            <h3 className="users-opinion-title">Our Users opinion...</h3>
          </div>

          {opinions.map((opinion, index) => (
            <div key={index} className={`opinion-card ${opinion.className}`}>
              <img src={opinion.image} alt="user opinion" className="opinion-avatar" />
              <p>{opinion.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
