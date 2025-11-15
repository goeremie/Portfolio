import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ this line
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import "./theme.css"; // ✅ must come last
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import gabe from "./assets/gabe.png";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-wrapper d-flex flex-column min-vh-100">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg sticky-top shadow">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Gabriel Eremie
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/skills" className="nav-link">
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Links
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex-grow-1 container text-center py-5">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1
                    className="h3 fst-italic fw-bold mb-4"
                    style={{ paddingTop: "100px" }}
                  >
                    "driven by curiosity, refined through code."
                  </h1>

                  {/* Image + Paragraph */}
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 mb-4 mb-md-0">
                      <img
                        src={gabe}
                        alt="Gabriel Eremie"
                        className="img-fluid rounded-circle shadow"
                        style={{
                          width: "275px",
                          height: "275px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="col-md-7 text-start">
                      <p className="lead">
                        Hello! I’m a Computer Science graduate from Thompson
                        Rivers University with a strong foundation in software
                        engineering, data structures, and algorithm design. My
                        interests lie in full-stack development, with a growing
                        passion for the gaming industry. I’ve contributed to
                        real-world projects, including an AI-powered quiz
                        builder and cross-platform e-commerce systems, gaining
                        hands-on experience with tools like React, Node.js,
                        Python, and SQL. I'm driven to build impactful,
                        user-centered applications and continually sharpen my
                        skills in modern development practices.
                      </p>
                    </div>
                  </div>
                </>
              }
            />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="py-3 mt-auto">
          <div className="container text-center">
            <small>
              &copy; {new Date().getFullYear()} Gabriel Eremie. All rights
              reserved.
            </small>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
