import Navbar from "../components-1/Navbar";
import Footer from "../component/Footer";
import "../styles-1/profile.css";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { PiArmchairFill, PiDogFill } from "react-icons/pi";
import profile from "../data/profile";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="app-shell">
        <main className="main-card">
          <Navbar />

          <div className="back-row">
            <button className="back-btn">←</button>
            <span>Lets keep searching</span>
          </div>

          <h1 className="greeting">Hi, {profile.name}...</h1>

          <section className="profile-card">
            <div className="profile-top">
              <div className="avatar-box">
                <div className="avatar-icon">⚙</div>
              </div>

              <div className="profile-info">
                <div className="name-pill">{profile.name}</div>

                <div className="tags">
                  <span className="tag green">{profile.university}</span>
                  <span className="tag pink">
                    Member since {profile.memberSince}
                  </span>
                  <span className="tag blue">Preferences</span>
                </div>

                <div className="mini-icons">
                  <span className="mini-tag">
                    <HiMiniComputerDesktop />
                  </span>

                  <span className="mini-tag orange">+23</span>

                  <span className="mini-tag green">
                    <PiArmchairFill />
                  </span>

                  <span className="mini-tag pink">
                    <PiDogFill />
                  </span>
                </div>

                <div className="tags second-line">
                  {profile.preferences.map((item, index) => (
                    <span key={index} className="tag peach">
                      {item}
                    </span>
                  ))}
                </div>

                <p className="tiny-text">
                  Your preferences may help us match your compatibility score.
                </p>
              </div>
            </div>

            <div className="matters-section">
              <h2>What matters most to you?</h2>
              <p>
                You prefer quiet areas within walking distance and prioritize
                safety over nightlife.
              </p>

              <div className="bars-grid">
                {profile.priorities.map((item, index) => (
                  <div key={index} className="bar-item">
                    <div className="bar-label">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="logout-wrap">
              <button className="logout-btn" onClick={() => navigate("/login")}>
                log out
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Profile;
