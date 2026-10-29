
import { Link } from 'react-router-dom';
import portrait from '../assets/photo.jpg';
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
            Good work starts with understanding the people it's for.
          </h2>

          <p>
            I enjoy turning ideas into practical digital experiences
            by combining frontend development, problem-solving, and
            user-centered design. With a Bachelor of Science in
            Computing Science from Thompson Rivers University, I
            bring a technical foundation to building web applications,
            Android projects, and responsive websites. I also care
            about the details that make digital products intuitive,
            accessible, and enjoyable to use.
          </p>

          <p>
            Alongside software projects, I'm growing a freelance
            practice creating websites for small businesses. SunBaked
            Pastries is the first example of that work, and I'm excited
            to build more partnerships over time.
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
