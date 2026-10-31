
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/projects';
import ArrowIcon from '../components/ArrowIcon';

export default function Home() {
  return (
    <>
      <section className="hero container-wide">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span className="status-dot" />
            Computing Science graduate · Developer & designer
          </p>

          <h1>
            I create digital
            <br />
            <span>constructs that matter.</span>
          </h1>

          <p className="hero-description">
            I'm a Computing Science graduate interested in game development, UI/UX design, 
            frontend engineering, and SQL database administration. I enjoy building interactive experiences, intuitive interfaces,
             and practical software solutions, from games and applications to business websites. I'm eager to keep learning, contribute to meaningful projects, and grow across these areas of technology.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/work">
              Explore my work <span><ArrowIcon /></span>
            </Link>

            <Link className="button button-quiet" to="/contact">
              Let's work together
            </Link>
          </div>
        </div>

        <div className="hero-aside reveal" aria-label="Introduction">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="hero-monogram">
            GE<span>.</span>
          </div>

          <p>
            Curiosity into craft.
            <br />
            Ideas into experiences.
          </p>

          <span className="hero-index">
            BASED IN BRITISH COLUMBIA, CANADA
          </span>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span>01 / 04</span>
        </div>
      </section>

      <section className="section container-wide">
        <SectionHeading
          eyebrow="A selection of my work"
          title="Selected projects"
          description="A mix of software projects and real-world website work. Each one is an opportunity to solve a problem and make the experience better."
        />

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

        <div className="section-end">
          <Link className="text-link" to="/work">
            View all work <span><ArrowIcon /></span>
          </Link>
        </div>
      </section>

      <section className="services-band">
        <div className="container-wide services-band-inner">
          <div>
            <p className="eyebrow">How I can help</p>

            <h2>
              From first idea
              <br />
              to finished website.
            </h2>
          </div>

          <div>
            <p>
              I work across development, interface design and business
              websites—bringing clarity and care to each stage.
            </p>

            <Link className="text-link" to="/services">
              Explore services <span><ArrowIcon /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-cta container-wide">
        <p className="eyebrow">Have something in mind?</p>

        <h2>
          Let's make it
          <br />
          <span>real.</span>
        </h2>

        <Link className="button button-primary" to="/contact">
          Start a conversation <span><ArrowIcon /></span>
        </Link>
      </section>
    </>
  );
}
