import { useState } from 'react';
import {
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase,
  FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub, FaFigma,
  FaBrain, FaRobot, FaNetworkWired, FaServer,
  FaMobileAlt, FaCogs, FaProjectDiagram
} from 'react-icons/fa';
import {
  SiNextdotjs, SiRedux, SiTailwindcss, SiVercel, SiNetlify,
  SiExpress, SiTypescript, SiCplusplus, SiPostman, SiMongodb
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { HiCode, HiChip, HiCubeTransparent, HiDesktopComputer } from 'react-icons/hi';

// Map icon keys to React Icon components
const iconMap = {
  java: FaJava,
  python: FaPython,
  javascript: FaJs,
  typescript: SiTypescript,
  cpp: SiCplusplus,
  html5: FaHtml5,
  css3: FaCss3Alt,
  sql: FaDatabase,
  react: FaReact,
  nextjs: SiNextdotjs,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  bootstrap: FaBootstrap,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  ai: FaRobot,
  prompt: HiChip,
  nlp: FaBrain,
  llm: HiCubeTransparent,
  git: FaGitAlt,
  github: FaGithub,
  vscode: VscVscode,
  postman: SiPostman,
  figma: FaFigma,
  netlify: SiNetlify,
  vercel: SiVercel,
  dsa: HiCode,
  api: FaServer,
  oop: FaCogs,
  dbms: FaDatabase,
  os: HiDesktopComputer,
  network: FaNetworkWired,
  responsive: FaMobileAlt,
};

// Official Brand Colors
const brandColors = {
  java: '#E76F00',       // Java orange
  python: '#3776AB',     // Python blue
  javascript: '#F7DF1E', // JavaScript yellow
  typescript: '#3178C6', // TypeScript blue
  cpp: '#00599C',        // C++ blue
  html5: '#E34F26',      // HTML5 orange
  css3: '#1572B6',       // CSS3 blue
  sql: '#00758F',        // SQL cyan
  react: '#61DAFB',      // React cyan
  nextjs: '#FFFFFF',     // Next.js white
  redux: '#764ABC',      // Redux purple
  tailwind: '#06B6D4',   // Tailwind cyan
  bootstrap: '#7952B3',  // Bootstrap purple
  nodejs: '#5FA04E',     // Node.js green
  express: '#FFFFFF',    // Express.js white
  mongodb: '#47A248',    // MongoDB green
  ai: '#10B981',         // AI emerald
  prompt: '#F59E0B',     // Prompt amber
  nlp: '#EC4899',        // NLP rose/pink
  llm: '#8B5CF6',        // LLM purple
  git: '#F05032',        // Git orange-red
  github: '#FFFFFF',     // GitHub white
  vscode: '#007ACC',     // VS Code blue
  postman: '#FF6C37',    // Postman orange
  figma: '#F24E1E',      // Figma red-orange
  netlify: '#00C7B7',    // Netlify teal
  vercel: '#FFFFFF',     // Vercel white
  dsa: '#38BDF8',        // DSA sky blue
  api: '#10B981',        // REST APIs emerald
  oop: '#F59E0B',        // OOP amber
  dbms: '#3B82F6',       // DBMS blue
  os: '#8B5CF6',         // OS violet
  network: '#06B6D4',    // Network cyan
  responsive: '#EC4899', // Responsive pink
};

const SkillCard = ({ name, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[icon] || FaProjectDiagram;
  const brandColor = brandColors[icon] || '#FFFFFF';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card p-2.5 sm:p-3 flex flex-col items-center gap-1.5 group cursor-default transition-all duration-300 rounded-xl"
      style={{
        borderColor: isHovered ? `${brandColor}55` : 'rgba(255, 255, 255, 0.08)',
        boxShadow: isHovered ? `0 0 16px ${brandColor}22` : undefined,
      }}
    >
      <div
        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg border transition-all duration-300"
        style={{
          backgroundColor: isHovered ? `${brandColor}18` : 'rgba(255, 255, 255, 0.04)',
          borderColor: isHovered ? `${brandColor}77` : 'rgba(255, 255, 255, 0.1)',
          boxShadow: isHovered ? `0 0 12px ${brandColor}44` : undefined,
        }}
      >
        <IconComponent
          className="text-sm sm:text-base transition-all duration-300"
          style={{
            color: brandColor,
            filter: isHovered ? `drop-shadow(0 0 5px ${brandColor})` : undefined,
          }}
        />
      </div>
      <span className="text-[10px] sm:text-[11px] text-neutral-300 group-hover:text-white text-center font-medium leading-tight transition-colors line-clamp-1">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
