import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';
import { HiDownload, HiArrowDown } from 'react-icons/hi';

const useTypewriterLoop = (text, typeSpeed = 50, deleteSpeed = 25, pauseDuration = 2200) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (!isDeleting && displayText.length < text.length) {
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, typeSpeed);
    } else if (!isDeleting && displayText.length === text.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && displayText.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text, typeSpeed, deleteSpeed, pauseDuration]);

  return displayText;
};

const Hero = () => {
  const introText = "Hey there, nice to meet you! I am_";
  const titleText = "Software Engineer | Fullstack Engineer";

  const displayedIntro = useTypewriterLoop(introText, 45, 20, 2600);
  const displayedTitle = useTypewriterLoop(titleText, 55, 25, 2200);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden"
      aria-label="Hero introduction"
    >
      {/* Subtle monochrome ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto pt-20 pb-10 sm:py-16 md:py-20 w-full">
        {/* Continuous Typewriter Intro Line */}
        <div className="h-6 sm:h-8 flex items-center justify-center mb-2 sm:mb-4">
          <p className="text-neutral-400 font-mono text-xs sm:text-base tracking-wider sm:tracking-widest uppercase">
            {displayedIntro}
            <span className="inline-block w-[2px] h-3.5 sm:h-4 bg-neutral-400 ml-1.5 align-middle animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
          </p>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black mb-2 sm:mb-4 leading-tight tracking-tight">
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Continuous Typewriter Title Line */}
        <div className="min-h-[1.75rem] sm:h-10 flex items-center justify-center mb-6 sm:mb-8 md:mb-10">
          <p className="text-sm sm:text-xl md:text-2xl font-mono text-neutral-200 tracking-normal sm:tracking-wider">
            {displayedTitle}
            <span className="inline-block w-[2px] h-4 sm:h-6 bg-white ml-1.5 align-middle shadow-[0_0_8px_#ffffff] animate-pulse" />
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="w-full sm:w-auto group flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-white text-black font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:bg-neutral-200 transition-all duration-300 hover:scale-[1.03] active:scale-95"
            id="hero-view-projects"
          >
            View Projects
            <HiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href={personalInfo.resumePath}
            download
            className="w-full sm:w-auto group flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            id="hero-download-resume"
          >
            Download Resume
            <HiDownload className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
