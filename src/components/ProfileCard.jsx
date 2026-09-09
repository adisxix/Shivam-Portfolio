import { personalInfo } from '../data/portfolio';
import { HiUser } from 'react-icons/hi';
import profilePic from '../assets/Pic.png';

const ProfileCard = () => {
  const imageSrc = profilePic || personalInfo.profileImage;

  return (
    <div className="flex justify-center">
      <div className="profile-glow-ring w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 hover:scale-[1.02] transition-transform duration-500 cursor-pointer group">
        <div className="w-full h-full rounded-[18px] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden border border-white/10 relative">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={`${personalInfo.name} profile photo`}
              className="w-full h-full object-cover object-top rounded-[18px] transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextElementSibling) {
                  e.target.nextElementSibling.style.display = 'flex';
                }
              }}
            />
          ) : null}
          {/* Placeholder fallback if image fails */}
          <div
            className={`w-full h-full flex-col items-center justify-center gap-4 ${
              imageSrc ? 'hidden' : 'flex'
            }`}
          >
            <div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shadow-inner">
              <HiUser className="text-neutral-400 text-4xl" />
            </div>
            <span className="text-neutral-400 text-xs sm:text-sm font-mono tracking-widest uppercase">
              Shivam Chaturvedi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
