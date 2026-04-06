import Header from '../component/Header';
import HeroSection from '../component/HeroSection';
import ProblemSection from '../component/ProblemSection';
import StudentVibeSection from '../component/StudentVibeSection';
import FeaturesSection from '../component/FeaturesSection';
import HowItWorksSection from '../component/HowItWorksSection';
import UsersOpinionSection from '../component/UsersOpinionSection';
import Footer from '../component/Footer';
import '../styles/home.css';

export default function Home() {
  return (
    <main className="home-page">
      <div className="home-shell">
        <div className="home-layer">
          <div className="home-card">
            <Header />
            <HeroSection />
            <ProblemSection />
            <StudentVibeSection />
            <FeaturesSection />
            <HowItWorksSection />
            <UsersOpinionSection />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
