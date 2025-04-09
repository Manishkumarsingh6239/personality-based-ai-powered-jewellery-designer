import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/prjct.scss";
import { MdHome, MdAccountBox } from "react-icons/md";
import { SiXdadevelopers } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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

  const closeSidebar = () => {
    const sidebar = document.querySelector(".main-sidebar-nav");
    sidebar.style.display = "none";
  }
  const showSidebar = () => {
    const sidebar = document.querySelector(".main-sidebar-nav");
    sidebar.style.display = "block";
  }


  // Sample jewelry designs for showcase
  const jewelryDesigns = [
    { id: 1, name: "Floral Elegance", style: "Rose gold with floral motifs", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e" },
    { id: 2, name: "Modern Minimalist", style: "Platinum with geometric patterns", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a" },
    { id: 3, name: "Vintage Charm", style: "Yellow gold with art deco influences", image: "https://images.unsplash.com/photo-1605106702734-205df224ecce" },
    { id: 4, name: "Nature Inspired", style: "Silver with leaf and vine details", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAtCq-AZVarkENh8UQnzSQ1hUtgYbACCexA&s" },
  ];

  // Testimonials data
  const testimonials = [
    { id: 1, name: "Sarah J.", quote: "I got the perfect engagement ring design in minutes! The AI understood exactly what I wanted.", role: "Happy Customer" },
    { id: 2, name: "Michael T.", quote: "As a jewelry store owner, this tool helps me create custom designs for clients effortlessly.", role: "Jewelry Retailer" },
    { id: 3, name: "Emma L.", quote: "The designs are so unique - nothing like I've seen in stores. Worth every penny!", role: "Fashion Blogger" },
  ];

  // FAQ data
  const faqs = [
    { id: 1, question: "How does the AI design process work?", answer: "Our AI analyzes your style preferences and combines them with current jewelry trends to create unique designs tailored just for you." },
    { id: 2, question: "Can I customize the design further?", answer: "Yes! You can request revisions or work with our designers to perfect your piece." },
    { id: 3, question: "Do you ship physical jewelry?", answer: "We partner with certified jewelers who can craft your design in the material of your choice." },
    { id: 4, question: "Is my data secure?", answer: "Absolutely. We use bank-level encryption and never share your personal information." },
  ];

  return (
    <div className="landing-container">
      /* Professional Navigation */
      <nav className="main-nav">
        <div className="nav-brand">
          <span>AI Personalized Jewelry Designer</span>
        </div>
        <div className="nav-menu">
          <button
            className={activeTab === "about" ? "nav-link active hideOnMobile" : "nav-link hideOnMobile"}
            onClick={() => setActiveTab("about")}
          >
            <MdHome />
          </button>
          <button
            className={activeTab === "auth" ? "nav-link active hideOnMobile" : "nav-link hideOnMobile"}
            onClick={() => setActiveTab("auth")}
          >
            <MdAccountBox />
          </button>
          <button
            className={activeTab === "developers" ? "nav-link active hideOnMobile" : "nav-link hideOnMobile"}
            onClick={() => setActiveTab("developers")}
          >
            <SiXdadevelopers />
          </button>
          <svg onClick={showSidebar} className="menu-button" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#d1d7de"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
        </div>
      </nav>
      <nav className="main-sidebar-nav" style={{ display: "none" }}>
        <div className="nav-menu">
          <svg onClick={closeSidebar} xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#d1d7de"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
          <button
            className={activeTab === "about" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("about")}
          >
            <MdHome />
          </button>
          <button
            className={activeTab === "auth" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("auth")}
          >
            <MdAccountBox />
          </button>
          <button
            className={activeTab === "developers" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("developers")}
          >
            <SiXdadevelopers />
          </button>
        </div>
      </nav>

      <main className="landing-main">
        {activeTab === "about" && (
          <>
            {/* 1. Hero Section */}}
            <section className="hero-section">
              <div className="hero-content">
                <h1>Create Your Unique AI-Powered Jewelry in Seconds!</h1>
                <h2>Answer a few questions, and our AI will craft a stunning, personalized jewelry design just for you.</h2>

                <div className="cta-group">
                  <button
                    className="primary-btn"
                    onClick={() => navigate('/design')}
                  >Try It
                  </button>
                  <button className="secondary-btn">
                    View Gallery
                  </button>
                </div>
              </div>

              <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f" alt="AI-generated jewelry" />
              </div>
            </section>

            {/* 2. How It Works */}
            <section className="steps-section">
              <h2>How AI Personalized Jewelry Designer Works</h2>
              <div className="steps-container">
                <div className="step">
                  <div className="step-icon">1</div>
                  <h3>Answer Questions</h3>
                  <p>Tell us your style preferences, materials, and budget</p>
                </div>
                <div className="step">
                  <div className="step-icon">2</div>
                  <h3>AI Generates Design</h3>
                  <p>Our advanced algorithms craft a unique piece just for you</p>
                </div>
                <div className="step">
                  <div className="step-icon">3</div>
                  <h3>Get Your Design</h3>
                  <p>Download, share, or order the physical jewelry</p>
                </div>
              </div>

              <div className="demo-cta">
                <button
                  className="primary-btn"
                  onClick={() => navigate('/design')}
                >
                  Try Now
                </button>
              </div>
            </section>

            {/* 3. AI-Powered Design Showcase */}
            <section className="showcase-section">
              <h2>AI-Generated Jewelry Designs</h2>
              <p>See what our technology can create</p>

              <div className="design-grid">
                {jewelryDesigns.map(design => (
                  <div className="design-card" key={design.id}>
                    <div className="design-image">
                      <img src={design.image} alt={design.name} />
                      <div className="design-hover">
                        <p>Input: {design.style}</p>
                      </div>
                    </div>
                    <h3>{design.name}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Benefits Section */}
            <section className="benefits-section">
              <h2>Why Choose Our Platform</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h3>100% Unique Designs</h3>
                  <p>No two pieces are alike - each creation is original</p>
                </div>
                <div className="benefit-card">
                  <h3>Personalized Just for You</h3>
                  <p>Designs based on your specific taste and requirements</p>
                </div>
                <div className="benefit-card">
                  <h3>Instant Creation</h3>
                  <p>No design skills needed - get professional results instantly</p>
                </div>
                <div className="benefit-card">
                  <h3>Order Physical Jewelry</h3>
                  <p>Option to have your design crafted by expert jewelers</p>
                </div>
              </div>
            </section>

            {/* 5. Testimonials */}
            <section className="testimonials-section">
              <h2>What Our Customers Say</h2>
              <div className="testimonials-grid">
                {testimonials.map(testimonial => (
                  <div className="testimonial-card" key={testimonial.id}>
                    <div className="testimonial-content">
                      <p>"{testimonial.quote}"</p>
                    </div>
                    <div className="testimonial-author">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="press-logos">
                <p>As featured in:</p>
                <div className="logos">
                  <span>Vogue</span>
                  <span>Jewelry Times</span>
                  <span>TechCrunch</span>
                </div>
              </div>
            </section>

            {/* 6. Secondary CTA */}
            <section className="cta-section">
              <h2>Ready to Create Your Dream Jewelry?</h2>
              <p>Join thousands of satisfied customers who found their perfect piece</p>
            </section>

            {/* 7. FAQ Section */}
            <section className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-grid">
                {faqs.map(faq => (
                  <div className="faq-card" key={faq.id}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === "auth" && (
          <section className="auth-section">
            <div className="auth-container">
              <div className="auth-tabs">
                <div className={`auth-tab ${loginForm.email ? 'active' : ''}`}>
                  <h2>Sign In</h2>
                  <form>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={loginForm.email}
                        onChange={handleLoginChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={loginForm.password}
                        onChange={handleLoginChange}
                      />
                    </div>
                    <button type="button" className="primary-btn">
                      Continue
                    </button>
                  </form>
                </div>

                <div className="auth-divider">
                  <span>or</span>
                </div>

                <div className={`auth-tab ${signupForm.email ? 'active' : ''}`}>
                  <h2>Create Account</h2>
                  <form>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={signupForm.name}
                        onChange={handleSignupChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={signupForm.email}
                        onChange={handleSignupChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={signupForm.password}
                        onChange={handleSignupChange}
                      />
                    </div>
                    <button type="button" className="primary-btn">
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "developers" && (
          <section className="team-section">
            <div className="section-header">
              <h1>Our Team</h1>
              <p>The minds behind Gemini's innovative technology</p>
            </div>

            <div className="team-grid">
              <div className="team-card">
                <div className="member-photo">
                  <img src="https://avatars.githubusercontent.com/u/149458264?v=4" alt="Manish" />
                </div>
                <div className="member-info">
                  <h3>Manish Kumar Singh</h3>
                  <p>12304562</p>
                  <div className="social-links">
                    <a href="https://github.com/Manishkumarsingh6239" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/manish2004/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-card">
                <div className="member-photo">
                  <img src="https://media.licdn.com/dms/image/v2/D4D03AQFj8zblTaa2_A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699981797060?e=1749686400&v=beta&t=MuMy8K2_cQkkOUXKsflnq43mx0bzHAiNQ4P6voRanHQ" alt="Manish" />
                </div>
                <div className="member-info">
                  <h3>Aditya Raj Rai</h3>
                  <p>12314947</p>
                  <div className="social-links">
                    <a href="https://github.com/Aditya7005446231" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-rai-31a250289/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-card">
                <div className="member-photo">
                  <img src="https://media.licdn.com/dms/image/v2/D5603AQG1CcOAFG1NVQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705167808094?e=1749686400&v=beta&t=wAFlKmWeJeoo7E0m508D0Eruf6fctTJQ0BBnuDwXumQ" alt="Manish" />
                </div>
                <div className="member-info">
                  <h3>Aman Singh</h3>
                  <p>12319291</p>
                  <div className="social-links">
                    <a href="https://github.com/singhaman5" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/amansingh2310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>

              {/* Repeat for other team members */}
            </div>
          </section>
        )}
      </main>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span>Ai Personalised Jewellery Designer</span>
            <p>AI-Powered Jewelry Design</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Company</h4>
              <div className="link-group-a">
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
              </div>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <div className="link-group-a">
                <a href="#">Blog</a>
                <a href="#">Help Center</a>
                <a href="#">Tutorials</a>
              </div>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <div className="link-group-a">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
            <div className="social-icons">
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gemini Jewellery Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;