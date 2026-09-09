import { personalInfo } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import ProfileCard from './ProfileCard';
import useReveal from '../hooks/useReveal';

const About = () => {
  const ref = useReveal();

  return (
    <section id="about" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" id="about-heading" />

        <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Profile Card */}
          <ProfileCard />

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-neutral-300 text-sm sm:text-lg leading-relaxed text-center sm:text-left">
              {personalInfo.about}
            </p>

            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
              {personalInfo.stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-3 sm:p-5 text-center"
                >
                  <p className="text-xl sm:text-3xl font-display font-black text-white text-glow-subtle mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-sm text-neutral-400 font-mono tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
