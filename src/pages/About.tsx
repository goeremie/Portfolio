
import { Link } from 'react-router-dom';
import portrait from '../assets/gabe.png';
import ArrowIcon from '../components/ArrowIcon';
import SectionHeading from '../components/SectionHeading';

const skillGroups = [
  {
    title: 'Development',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Python',
      'Kotlin',
      'Firebase',
    ],
  },
  {
    title: 'Design',
    skills: [
      'Figma',
      'UI/UX design',
      'Responsive layouts',
      'Prototyping',
      'Design systems',
    ],
  },
  {
    title: 'Tools & interests',
    skills: [
      'Git',
      'Netlify',
      'AI integration',
      'Mobile apps',
      'Game development',
    ],
  },
];

export default function About() {
  return (
    <section className="page-section container-wide">
      <SectionHeading
        eyebrow="A little about me / 02"
        title="Curious by nature. Intentional by design."
        description="I'm Gabriel Eremie, a Computing Science graduate interested in the space where technology, design and real-world needs meet."
      />

      <div className="about-layout">
        <div className="about-photo">
          <img
            src={portrait}
            alt="Portrait of Gabriel Eremie"
          />
          <span className="image-placeholder">
            Portrait preview
          </span>
        </div>

        <div className="about-copy">
          <p className="eyebrow">My approach</p>

          <h2>
            Great work begins by understanding the people it serves.
          </h2>

          <p>
            I relish the chance for exploring how technology, design, and problem-solving come together to create meaningful digital experiences. 
            As a Computing Science graduate from Thompson Rivers University, I've developed an interest in several areas of technology, 
            including game development, frontend development, UI/UX design, and SQL database management.
          </p>
          <p>Through academic, personal, and practical projects, I've gained experience building interactive applications, designing user-focused interfaces, 
            developing websites, and working with data-driven solutions. I'm particularly interested in how engaging gameplay, thoughtful design, and well-structured
            databases can improve the way people interact with technology.</p>
          <p>
            Alongside my software projects, I'm also developing a freelance practice creating websites for small businesses. SunBaked Pastries is the first example 
            of that work, and I'm looking forward to expanding my experience through new projects and collaborations.
          </p>

          <a
            className="text-link"
            href="/Gabriel_Eremie_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View resume <span aria-hidden="true"><ArrowIcon /></span>
          </a>
        </div>
      </div>

      <div className="skills-section">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills"
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="education-row">
        <div>
          <p className="eyebrow">Education</p>
          <h2>Bachelor of Science</h2>
          <p>Computing Science · Thompson Rivers University</p>
        </div>

        <p>Graduated April 2025</p>
      </div>

      <div className="inline-cta">
        <p>Want to know more about my experience?</p>

        <Link className="text-link" to="/contact">
          Get in touch <span aria-hidden="true"><ArrowIcon /></span>
        </Link>
      </div>
    </section>
  );
}
