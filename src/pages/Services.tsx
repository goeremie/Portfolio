import ArrowIcon from '../components/ArrowIcon';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

const services = [
  {
    n: '01',
    title: 'Business websites',
    text: 'Responsive, brand-aligned websites that help small businesses establish their online presence, showcase their products or services, and connect with customers. This includes multi-page websites and focused landing pages.',
  },
  {
    n: '02',
    title: 'UI/UX design',
    text: 'User-focused interface design for websites and applications, including wireframes, prototypes, user flows, and visual layouts that make digital experiences intuitive and easy to use.',
  },
  {
    n: '03',
    title: 'Web applications',
    text: 'Interactive web-based tools built around your users and goals, from application dashboards and data-driven interfaces to custom features that support specific workflows.',
  },
  {
    n: '04',
    title: 'Website updates & support',
    text: 'Improvements to existing websites, including content updates, layout refinements, responsive fixes, visual enhancements, and new features to keep your site useful and up to date.',
  },
];

export default function Services() {
  return (
    <section className="page-section container-wide">
      <SectionHeading
        eyebrow="Services / 03"
        title="Let's build something useful."
        description="I help small businesses, entrepreneurs, and teams bring their ideas online through responsive websites, thoughtful interface design, and practical web development. Every project begins with a conversation about your goals, audience, budget, and scope."
      />

      <div className="service-list">
        {services.map((service) => (
          <article
            className="service-item"
            key={service.n}
          >
            <span className="service-number">
              {service.n}
            </span>

            <h2>{service.title}</h2>

            <p>{service.text}</p>

            <span
              className="service-symbol"
              aria-hidden="true"
            >
              <ArrowIcon />
            </span>
          </article>
        ))}
      </div>

      <div className="service-note">
        <p className="eyebrow">The process</p>

        <h2>Clear steps. No guesswork.</h2>

        <div className="process-grid">
          <div>
            <b>01 / Discover</b>
            <p>
              We discuss your goals, audience, content and timeline.
            </p>
          </div>

          <div>
            <b>02 / Plan & design</b>
            <p>
              We agree on structure, look and feel before development.
            </p>
          </div>

          <div>
            <b>03 / Build & refine</b>
            <p>
              I build the site, share progress and incorporate feedback.
            </p>
          </div>

          <div>
            <b>04 / Launch</b>
            <p>
              We review the finished experience and prepare it to go live.
            </p>
          </div>
        </div>

        <p className="scope-note">
          Services and project scope are agreed individually.
          Final pricing and timelines depend on your requirements.
        </p>

        <Link
          className="button button-primary"
          to="/contact"
        >
          Tell me about your project <span><ArrowIcon /></span>
        </Link>
      </div>
    </section>
  );
}
