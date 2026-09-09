import { education } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import useReveal from '../hooks/useReveal';
import { HiAcademicCap, HiLocationMarker, HiCalendar } from 'react-icons/hi';

const Education = () => {
  const ref = useReveal();

  return (
    <section id="education" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" id="education-heading" />

        <div ref={ref} className="reveal space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-4 sm:p-8 relative overflow-hidden group"
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-white via-neutral-400 to-transparent group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-shadow duration-500" />

              <div className="ml-2 sm:ml-4">
                {/* Degree */}
                <div className="flex items-start gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                  <HiAcademicCap className="text-white text-lg sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0" />
                  <h3 className="text-lg sm:text-2xl font-display font-bold text-white leading-snug">
                    {edu.degree}
                  </h3>
                </div>

                {/* Institution */}
                <p className="text-sm sm:text-lg text-neutral-300 font-medium mb-2.5 ml-0 sm:ml-8">
                  {edu.institution}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 ml-0 sm:ml-8 mb-3 sm:mb-4 text-xs sm:text-sm text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <HiCalendar className="text-neutral-500" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HiLocationMarker className="text-neutral-500" />
                    {edu.location}
                  </span>
                </div>

                {/* CGPA */}
                <div className="ml-0 sm:ml-8 mb-3 sm:mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono border border-white/20 text-neutral-200 bg-white/5">
                    CGPA: {edu.cgpa}
                  </span>
                </div>

                {/* Coursework */}
                {edu.coursework && (
                  <div className="ml-0 sm:ml-8">
                    <p className="text-xs font-mono text-neutral-500 mb-2 tracking-widest uppercase">
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[11px] sm:text-xs rounded-lg bg-neutral-900 text-neutral-300 border border-white/10 hover:border-white/30 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
