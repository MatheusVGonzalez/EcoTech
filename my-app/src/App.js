import './App.css';
import emailjs from '@emailjs/browser';
import { Routes, Route, Link } from 'react-router-dom';
import Products from './Products';

function Bar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light topbar">
      <div className="container py-2">
        <Link className="navbar-brand brand" to="/">EcoTech</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><a className="nav-link" href="/#about">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="/#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="/#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="/#testimonials">Testimonials</a></li>
            <li className="nav-item"><a className="nav-link" href="/#contact">Contact</a></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
          </ul>
          <a className="btn btn-eco" href="/#contact">Get Free Quote</a>
        </div>
      </div>
    </nav>
  );
}

function Content() {
  const slides = [
    { src: '/download.jpg', title: 'Solar Energy, Save Energy', text: 'Showing you that solar energy is simpler than it seems.' },
    { src: '/img2.png', title: 'Clean Power For Everyone', text: 'Affordable, sustainable and reliable energy solutions.' },
    { src: '/hero-3.svg', title: 'Smarter Grids, Greener Future', text: 'Integrating solar and wind with analytics and IoT.' },
  ];
  return (
    <section id="home" className="hero-carousel">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button key={i} type="button" data-bs-target="#heroCarousel" data-bs-slide-to={i} className={i === 0 ? 'active' : ''} aria-current={i === 0 ? 'true' : undefined} aria-label={`Slide ${i+1}`}></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((s, i) => (
            <div key={s.src} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
              <div className="hero-item" style={{ backgroundImage: `linear-gradient(rgba(11,61,43,.55), rgba(11,61,43,.55)), url(${s.src})` }}>
                <div className="container">
                  <div className="col-12 col-lg-8">
                    <h1 className="hero-title">{s.title}</h1>
                    <p className="mt-3 hero-text">{s.text}</p>
                    <div className="hero-actions mt-4">
                      <a className="btn btn-eco btn-lg" href="#services">Our Services</a>
                      <a className="btn btn-outline-light btn-lg" href="#contact">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-md-6">
            <div className="about-img"></div>
          </div>
          <div className="col-12 col-md-6">
            <h2 className="fw-bold">About EcoTech</h2>
            <p className="text-muted">We deliver clean energy solutions with a focus on solar, wind, and smart grid integration. Our mission is to make renewable energy simple and accessible.</p>
            <ul className="list-unstyled small text-muted">
              <li>• Tailored residential and commercial solar</li>
              <li>• Wind integration and monitoring</li>
              <li>• Smart metering and analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feat() {
  const items = [
    { title: 'Solar', text: 'Basic photovoltaic solutions.' },
    { title: 'Wind', text: 'Simple wind integration.' },
    { title: 'Smart Grid', text: 'Intro to smart metering.' },
  ];
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="fw-bold text-eco text-center mb-4">Our Services</h2>
        <div className="row g-3">
          {items.map((it) => (
            <div key={it.title} className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{it.title}</h5>
                  <p className="card-text text-muted">{it.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const cards = Array.from({ length: 6 }).map((_, i) => i + 1);
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <h2 className="fw-bold mb-0">Projects</h2>
          <a className="text-eco" href="#projects">View all</a>
        </div>
        <div className="row g-3">
          {cards.map((n) => (
            <div key={n} className="col-12 col-md-4">
              <div className="project-card">
                <div className="project-thumb"></div>
                <div className="p-3">
                  <h6 className="mb-1">Solar Installation #{n}</h6>
                  <small className="text-muted">Residential • 5kW</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comments() {
  const quotes = [
    { name: 'Ana', text: 'Equipe excelente e instalação rápida!' },
    { name: 'Carlos', text: 'Conta de luz caiu muito. Recomendo.' },
    { name: 'Julia', text: 'Profissionalismo do começo ao fim.' },
  ];
  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Testimonials</h2>
        <div className="row g-3">
          {quotes.map((q) => (
            <div key={q.name} className="col-12 col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <p className="mb-2">“{q.text}”</p>
                  <small className="text-muted">— {q.name}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert('Message sent!');
        form.reset();
      })
      .catch(() => alert('Failed to send. Please try again.'));
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h2 className="fw-bold">Contact Us</h2>
            <p className="text-muted small">Send us a message and we’ll get back to you.</p>
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input name="user_name" className="form-control" placeholder="Your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input name="user_email" type="email" className="form-control" placeholder="name@example.com" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" rows="4" placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="btn btn-eco">Send</button>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <div className="map-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-4 border-top bg-white">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
        <div className="d-flex align-items-center gap-2">
          <span className="fw-semibold text-eco">EcoTech</span>
        </div>
        <small className="text-muted">© {new Date().getFullYear()} EcoTech. All rights reserved.</small>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <Content />
      <About />
      <Feat />
      <Projects />
      <Comments />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <>
      <Bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}
