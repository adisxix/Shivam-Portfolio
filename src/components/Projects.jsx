import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import useReveal from '../hooks/useReveal';

const Projects = () => {
  const ref = useReveal();

  return (
    <section id="projects" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" id="projects-heading" />

        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
