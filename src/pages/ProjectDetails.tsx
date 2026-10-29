
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import NotFound from './NotFound';


export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <article className="case-study container-wide">
      <Link className="back-link" to="/work">
        ← Back to all work
      </Link>

      <header className="case-header">
        <p className="eyebrow">
          {project.category} · {project.year}
        </p>

        <h1>
          {project.title}
          <span>.</span>
        </h1>

        <p className="case-subtitle">{project.subtitle}</p>
        <p className="case-summary">{project.summary}</p>
      </header>

      
<div className="case-image">
  <img
    src={project.image}
    alt={`${project.title} preview`}
    onError={(event) => {
      event.currentTarget.style.display = 'none';

      const placeholder =
        event.currentTarget.parentElement?.querySelector(
          '.image-placeholder'
        );

      if (placeholder instanceof HTMLElement) {
        placeholder.style.display = 'grid';
      }
    }}
  />

  <span className="image-placeholder">
    Add a high-quality project screenshot here
  </span>
</div>


      <div className="case-content">
        <section>
          <p className="eyebrow">01 / The challenge</p>
          <h2>The problem</h2>
          <p>{project.problem}</p>
        </section>

        <section>
          <p className="eyebrow">02 / The approach</p>
          <h2>The solution</h2>
          <p>{project.solution}</p>
        </section>

        <section>
          <p className="eyebrow">03 / My contribution</p>
          <h2>What I worked on</h2>

          <ul>
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <p className="eyebrow">04 / Built with</p>
          <h2>Technology & tools</h2>

          <div className="tag-list">
            {project.stack.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="case-actions">
        {project.liveUrl && (
          <a
            className="button button-primary"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit live website ↗
          </a>
        )}

        {project.repoUrl && (
          <a
            className="button button-quiet"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            View source code ↗
          </a>
        )}
      </div>

      <div className="next-project">
        <p className="eyebrow">Keep exploring</p>

        <Link className="text-link" to="/work">
          More projects <span>↗</span>
        </Link>
      </div>
    </article>
  );
}
