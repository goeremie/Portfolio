
import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { projects, type ProjectCategory } from '../data/projects';

type Filter = 'All work' | ProjectCategory;

const filters: Filter[] = [
  'All work',
  'Software',
  'Client website',
  'Design',
];

export default function Work() {
  const [filter, setFilter] = useState<Filter>('All work');

  const visibleProjects = useMemo(() => {
    if (filter === 'All work') {
      return projects;
    }

    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section className="page-section container-wide">
      <SectionHeading
        eyebrow="Portfolio / 01"
        title="Work that brings ideas to life."
        description="Explore software projects, website builds and design work. This collection will grow as I collaborate with more businesses and create new products."
      />

      <div
        className="filter-row"
        aria-label="Filter projects"
        role="group"
      >
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={`filter-button ${
              filter === item ? 'selected' : ''
            }`}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
