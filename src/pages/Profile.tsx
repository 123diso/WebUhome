import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/profile.css'
import { HiMiniComputerDesktop } from 'react-icons/hi2'
import { PiArmchairFill, PiDogFill } from 'react-icons/pi'
import profile from '../data/profile'

function Profile() {
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

  
  )
}
