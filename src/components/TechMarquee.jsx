import { marqueeItems } from '../data/portfolio';

const brandColors = {
  'React.js': '#61DAFB',
  'JavaScript': '#F7DF1E',
  'Java': '#E76F00',
  'Python': '#3776AB',
  'Next.js': '#FFFFFF',
  'Tailwind CSS': '#06B6D4',
  'Redux': '#764ABC',
  'Node.js': '#5FA04E',
  'HTML5': '#E34F26',
  'CSS3': '#1572B6',
  'SQL': '#00758F',
  'Git': '#F05032',
  'GitHub': '#FFFFFF',
  'REST APIs': '#10B981',
  'Generative AI': '#10B981',
  'NLP': '#EC4899',
  'Figma': '#F24E1E',
  'Vercel': '#FFFFFF',
  'Bootstrap': '#7952B3',
  'VS Code': '#007ACC',
};

const TechMarquee = ({ reverse = false }) => {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full overflow-hidden py-4 sm:py-8 relative" aria-hidden="true">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Top line */}
      <div className="divider-glow mb-3 sm:mb-5" />

      <div
        className={`marquee-track ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {items.map((tech, i) => {
          const brandColor = brandColors[tech] || '#FFFFFF';
          return (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-2.5 sm:gap-3.5 px-5 sm:px-8 text-xs sm:text-sm font-mono tracking-wide"
            >
              <span className="flex items-center gap-2 text-neutral-400 whitespace-nowrap hover:text-white transition-colors duration-200">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: brandColor, boxShadow: `0 0 6px ${brandColor}` }}
                />
                {tech}
              </span>
              <span className="text-neutral-700">◆</span>
            </span>
          );
        })}
      </div>

      {/* Bottom line */}
      <div className="divider-glow mt-3 sm:mt-5" />
    </div>
  );
};

export default TechMarquee;
