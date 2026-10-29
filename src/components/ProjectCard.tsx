
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card reveal">
      <Link
        to={`/work/${project.slug}`}
        className="project-image-link"
        aria-label={`View ${project.title} case study`}
      >
        <div className="project-image-frame">
          
<img
  src={project.image}
  alt={`${project.title} project preview`}
  loading="lazy"
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
            Project preview
          </span>

          <span className="image-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </Link>

      <div className="project-meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>

      <h3>
        <Link to={`/work/${project.slug}`}>
          {project.title}
        </Link>
      </h3>

      <p>{project.subtitle}</p>

      <Link
        className="text-link"
        to={`/work/${project.slug}`}
      >
        Explore project <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
