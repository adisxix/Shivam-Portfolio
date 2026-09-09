import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const techColors = {
  'CSS': '#1572B6',
  'HTML': '#E34F26',
  'JavaScript': '#F7DF1E',
  'Design Tokens': '#A855F7',
  'React.js': '#61DAFB',
  'Redux': '#764ABC',
  'REST APIs': '#10B981',
  'Python': '#3776AB',
  'NLP': '#EC4899',
  'AI': '#10B981',
  'Automation': '#F59E0B',
};

const ProjectCard = ({ project }) => {
  const { name, subtitle, description, tech, liveUrl, githubUrl, hasLive, hasGithub } = project;

  return (
    <div className="browser-card glass-card overflow-hidden group flex flex-col justify-between">
      <div>
        {/* Browser Top Bar */}
        <div className="browser-topbar">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <div className="browser-address-bar">
            {name.toLowerCase().replace(/\s+/g, '-')}.dev
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 sm:p-6">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 group-hover:text-neutral-200 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 mb-4">{subtitle}</p>

          {/* Description */}
          <p className="text-sm text-neutral-300 leading-relaxed mb-5 line-clamp-4">
            {description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tech.map((t, i) => {
              const brandColor = techColors[t];
              return (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-neutral-300 border border-white/10 flex items-center gap-1.5"
                >
                  {brandColor && (
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: brandColor, boxShadow: `0 0 6px ${brandColor}` }}
                    />
                  )}
                  {t}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 flex items-center gap-3">
        {hasLive && liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            aria-label={`View ${name} live`}
          >
            <HiExternalLink className="text-[#0070F3]" />
            Live Demo
          </a>
        )}
        {hasGithub && githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-neutral-300 border border-white/20 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            aria-label={`View ${name} on GitHub`}
          >
            <FaGithub />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
