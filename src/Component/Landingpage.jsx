import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/prjct.scss";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb"

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Gemini Jewellery Design</h1>
        <p>AI-powered personalized jewellery creation</p>
      </header>

      <nav className="landing-nav">
        <button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={activeTab === "auth" ? "active" : ""}
          onClick={() => setActiveTab("auth")}
        >
          Login/Signup
        </button>
        <button
          className={activeTab === "developers" ? "active" : ""}
          onClick={() => setActiveTab("developers")}
        >
          Developers
        </button>
      </nav>

      <main className="landing-main">
        {activeTab === "about" && (
          <section className="about-section">
            <h2>About Our Platform</h2>
            <p>
              Gemini Jewellery Design uses advanced AI to create personalized jewellery designs
              based on your personality traits and preferences.
            </p>
            <div className="features">
              <div className="feature-card">
                <h3>Personalized Designs</h3>
                <p>Get jewellery that matches your unique personality</p>
              </div>
              <div className="feature-card">
                <h3>AI-Powered</h3>
                <p>Advanced algorithms create photorealistic designs</p>
              </div>
            </div>
            <button className="start-button" onClick={() => navigate('/design')}>
              Start Designing Now
            </button>
          </section>
        )}

        {activeTab === "auth" && (
          <section className="auth-section">
            <div className="auth-tabs">
              <div className="login-form">
                <h2>Login</h2>
                <form>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginForm.email}
                    onChange={handleLoginChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                  />
                  <button type="button" className="auth-button">
                    Login
                  </button>
                </form>
              </div>
              <div className="signup-form">
                <h2>Sign Up</h2>
                <form>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={signupForm.name}
                    onChange={handleSignupChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={signupForm.email}
                    onChange={handleSignupChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={signupForm.password}
                    onChange={handleSignupChange}
                  />
                  <button type="button" className="auth-button">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {activeTab === "developers" && (
          <section className="developers-section">
            <h2>Meet Our Team</h2>
            <div className="team-members">
              <div className="member-card">
                <div className="member-avatar">
                  <img src="https://avatars.githubusercontent.com/u/149458264?v=4" alt="Manish" />
                </div>
                <h3>Manish</h3>
                <p>12304562</p>
                <a href="https://github.com/Manishkumarsingh6239" target="blank"><TbBrandGithub /></a>
                <a href="https://www.linkedin.com/in/manish2004/" target="blank"><TbBrandLinkedin /></a>
              </div>
              <div className="member-card">
                <div className="member-avatar">
                  <img src="https://media.licdn.com/dms/image/v2/D4D03AQFj8zblTaa2_A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699981797060?e=1749081600&v=beta&t=jdJ60rS7EsnjmWedp4YD1JkD69CdyIHh8iiPiw_M1qE" alt="Aditya" />
                </div>
                <h3>Aditya</h3>
                <p>Lorem, ipsum.</p>
                <a href="https://github.com/Aditya7005446231" target="blank"><TbBrandGithub /></a>
                <a href="https://www.linkedin.com/in/aditya-rai-31a250289/" target="blank"><TbBrandLinkedin /></a>
              </div>
              <div className="member-card">
                <div className="member-avatar">
                  <img src="https://media.licdn.com/dms/image/v2/D5603AQG1CcOAFG1NVQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705167808094?e=1749081600&v=beta&t=-stU8Vdbcqh_L24M8nemEOUbdVRvQ51UIsSvPeKpmv0" alt="Aman" />
                </div>
                <h3>Aman</h3>
                <p>Lorem, ipsum.</p>
                <a href="https://github.com/singhaman5" target="blank"><TbBrandGithub /></a>
                <a href="https://www.linkedin.com/in/amansingh2310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><TbBrandLinkedin /></a>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Gemini Jewellery Design</p>
      </footer>
    </div>
  );
};

export default LandingPage;