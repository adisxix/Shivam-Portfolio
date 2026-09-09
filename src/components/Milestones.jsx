import { achievements, certifications } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import useReveal from '../hooks/useReveal';
import { HiBadgeCheck, HiStar, HiExternalLink, HiCalendar } from 'react-icons/hi';

const Milestones = () => {
  const ref = useReveal();

  return (
    <section id="milestones" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Milestones" id="milestones-heading" />

        <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* LEFT MASTER BOX: Certifications */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl border border-white/15 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:border-white/25 transition-all duration-300">
            <div>
              {/* Box Header */}
              <div className="flex items-center gap-3 pb-4 mb-4 sm:pb-5 sm:mb-6 border-b border-white/10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.25)] shrink-0">
                  <HiBadgeCheck className="text-amber-400 text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    Certifications
                  </h3>
                  <p className="text-[11px] sm:text-xs font-mono text-neutral-400">
                    Verified Credentials & Licenses
                  </p>
                </div>
              </div>

              {/* Inside Nested Cards */}
              <div className="space-y-3 sm:space-y-4">
                {certifications && certifications.length > 0 ? (
                  certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 sm:p-5 hover:bg-white/[0.07] hover:border-white/25 transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-3 mb-1.5">
                          <div>
                            <h4 className="text-sm sm:text-base font-display font-bold text-white group-hover:text-neutral-200 transition-colors">
                              {cert.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-neutral-400 font-medium">
                              {cert.issuer}
                            </p>
                          </div>
                          {cert.date && (
                            <span className="self-start sm:self-auto flex items-center gap-1 text-[11px] sm:text-xs font-mono text-neutral-400 bg-white/5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-white/10 shrink-0">
                              <HiCalendar className="text-neutral-500 text-xs" />
                              {cert.date}
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-1.5 sm:mt-2">
                          {cert.description}
                        </p>
                      </div>

                      {cert.credentialUrl && cert.credentialUrl !== '#' && (
                        <div className="mt-3 pt-2 sm:pt-2.5 border-t border-white/10 flex items-center justify-end">
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                          >
                            Verify Credential
                            <HiExternalLink className="text-xs" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-neutral-400 font-mono text-xs rounded-xl bg-white/[0.02] border border-white/10">
                    Certifications will be added here.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT MASTER BOX: Achievements */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl border border-white/15 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:border-white/25 transition-all duration-300">
            <div>
              {/* Box Header */}
              <div className="flex items-center gap-3 pb-4 mb-4 sm:pb-5 sm:mb-6 border-b border-white/10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.25)] shrink-0">
                  <HiStar className="text-amber-400 text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    Achievements
                  </h3>
                  <p className="text-[11px] sm:text-xs font-mono text-neutral-400">
                    Key Accomplishments & Impact
                  </p>
                </div>
              </div>

              {/* Inside Nested Cards */}
              <div className="space-y-3 sm:space-y-4">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 sm:p-5 hover:bg-white/[0.07] hover:border-white/25 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-400/10 border border-amber-400/25 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-amber-400/50 group-hover:bg-amber-400/20 transition-all">
                        <span className="text-amber-400 text-[10px] sm:text-xs font-bold font-mono">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-display font-bold text-white mb-1 group-hover:text-neutral-200 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
