import { skills } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';
import useReveal from '../hooks/useReveal';
import { HiCode, HiDesktopComputer } from 'react-icons/hi';
import { FaServer, FaTools } from 'react-icons/fa';

const categoryConfig = {
  Frontend: {
    icon: HiDesktopComputer,
    subtitle: 'Client-Side & UI Development',
  },
  Backend: {
    icon: FaServer,
    subtitle: 'Server, Database & Systems',
  },
  Languages: {
    icon: HiCode,
    subtitle: 'Core Programming Languages',
  },
  Tools: {
    icon: FaTools,
    subtitle: 'DevOps, Workflow & AI Tools',
  },
};

const Skills = () => {
  const ref = useReveal();

  return (
    <section id="skills" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Tech Stack" id="skills-heading" />

        <div
          ref={ref}
          className="reveal grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch"
        >
          {Object.entries(skills).map(([category, items]) => {
            const config = categoryConfig[category] || {
              icon: HiCode,
              subtitle: 'Technologies',
            };
            const Icon = config.icon;

            return (
              <div
                key={category}
                className="glass-card p-4 sm:p-7 rounded-2xl border border-white/12 shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header inside the Box */}
                  <div className="flex items-center justify-between gap-3 pb-3 mb-4 sm:pb-4 sm:mb-5 border-b border-white/10">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-base sm:text-lg shadow-inner shrink-0">
                        <Icon />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-display font-bold text-white tracking-wide">
                          {category}
                        </h3>
                        <p className="text-[11px] sm:text-xs font-mono text-neutral-400">
                          {config.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-xs font-mono text-neutral-400 bg-white/5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-white/10 shrink-0">
                      {items.length} {items.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>

                  {/* Skills Grid inside the Box */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                    {items.map((skill) => (
                      <SkillCard
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
