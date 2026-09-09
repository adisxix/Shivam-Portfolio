import { useState, useEffect } from 'react';
import { personalInfo, bankDetails } from '../data/portfolio';
import { HiPhone, HiMail, HiLocationMarker, HiDuplicate, HiCheck, HiX } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub, FaUniversity, FaQrcode, FaUserCheck } from 'react-icons/fa';
import { SiLeetcode, SiX, SiInstagram, SiSnapchat } from 'react-icons/si';
import qrCodeImg from '../assets/qrcode.jpeg';

const ContactInfo = () => {
  const [activeModal, setActiveModal] = useState(null); // 'qr' | 'bank' | null
  const [copiedField, setCopiedField] = useState(null);

  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: personalInfo.social.github,
      brandColor: '#FFFFFF',
    },
    {
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      url: personalInfo.social.linkedin,
      brandColor: '#0A66C2',
    },
    {
      icon: SiLeetcode,
      label: 'LeetCode',
      url: personalInfo.social.leetcode,
      brandColor: '#FFA116',
    },
    {
      icon: SiX,
      label: 'X (Twitter)',
      url: personalInfo.social.x,
      brandColor: '#FFFFFF',
    },
    {
      icon: SiInstagram,
      label: 'Instagram',
      url: personalInfo.social.instagram,
      brandColor: '#E4405F',
    },
    {
      icon: SiSnapchat,
      label: 'Snapchat',
      url: personalInfo.social.snapchat,
      brandColor: '#FFFC00',
    },
  ];

  return (
    <>
      <div className="glass-card p-4 sm:p-8 flex flex-col rounded-2xl border border-white/12 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        {/* Header */}
        <div>
          <h3 className="text-xl sm:text-3xl font-display font-bold text-white mb-2">
            Let&apos;s connect
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mb-5 sm:mb-6">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>

          {/* Contact Details with tight natural spacing */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center gap-3.5 group">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 shrink-0">
                <HiPhone className="text-emerald-400 text-base group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-neutral-400 mb-0.5 tracking-widest uppercase">Phone</p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3.5 group">
              <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:border-red-500/50 group-hover:bg-red-500/20 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300 shrink-0">
                <HiMail className="text-red-400 text-base group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-neutral-400 mb-0.5 tracking-widest uppercase">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3.5 group">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:border-rose-500/50 group-hover:bg-rose-500/20 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all duration-300 shrink-0">
                <HiLocationMarker className="text-rose-400 text-base group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-neutral-400 mb-0.5 tracking-widest uppercase">Location</p>
                <p className="text-xs sm:text-sm text-neutral-300">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links — Placed right below contact details without awkward gap */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <p className="text-[11px] font-mono text-neutral-400 mb-3 tracking-widest uppercase">Socials</p>
          <div className="flex flex-wrap gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center transition-all duration-300 group hover:scale-110 active:scale-95"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${social.brandColor}66`;
                  e.currentTarget.style.backgroundColor = `${social.brandColor}18`;
                  e.currentTarget.style.boxShadow = `0 0 16px ${social.brandColor}44`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <social.icon
                  className="text-base transition-all duration-300"
                  style={{
                    color: social.brandColor,
                    filter: `drop-shadow(0 0 5px ${social.brandColor}66)`,
                  }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Buy Me a Drink — Click to open modal in center */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <p className="text-[11px] font-mono text-neutral-400 mb-3 tracking-widest uppercase">
            Buy me a drink
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {/* QR Code Icon Button */}
            <button
              type="button"
              onClick={() => setActiveModal('qr')}
              className="group relative p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center gap-2.5 sm:gap-3 cursor-pointer text-left hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white text-base sm:text-lg group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                <FaQrcode />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white group-hover:text-white transition-colors truncate">
                  View QR Code
                </p>
                <p className="text-[10px] font-mono text-neutral-400 truncate">
                  UPI / GPay / Paytm
                </p>
              </div>
            </button>

            {/* Bank Details Icon Button */}
            <button
              type="button"
              onClick={() => setActiveModal('bank')}
              className="group relative p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center gap-2.5 sm:gap-3 cursor-pointer text-left hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-base sm:text-lg group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                <FaUniversity />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white group-hover:text-white transition-colors truncate">
                  Bank Details
                </p>
                <p className="text-[10px] font-mono text-neutral-400 truncate">
                  Slice Small Finance
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Dialog — Centered in Screen */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto overscroll-contain"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModal(null);
          }}
        >
          <div className="relative w-full max-w-md glass-card p-4 sm:p-7 rounded-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-center animate-scale-up max-h-[92vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white text-base">
                  {activeModal === 'qr' ? <FaQrcode /> : <FaUniversity />}
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-white">
                  {activeModal === 'qr' ? 'UPI / QR Code' : 'Bank Account Details'}
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/20 hover:text-white text-neutral-400 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <HiX className="text-lg" />
              </button>
            </div>

            {/* Quick switcher inside modal */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white/5 border border-white/10 mb-5">
              <button
                type="button"
                onClick={() => setActiveModal('qr')}
                className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-medium transition-all duration-300 ${
                  activeModal === 'qr'
                    ? 'bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <FaQrcode className="text-xs" />
                <span>QR Code</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveModal('bank')}
                className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-medium transition-all duration-300 ${
                  activeModal === 'bank'
                    ? 'bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <FaUniversity className="text-xs" />
                <span>Bank Details</span>
              </button>
            </div>

            {/* Modal Body: QR Code Content */}
            {activeModal === 'qr' ? (
              <div className="flex flex-col items-center">
                <div className="p-3 bg-white rounded-2xl shadow-xl inline-block border border-white/20 mb-4 hover:scale-105 transition-transform">
                  <img
                    src={qrCodeImg}
                    alt="Shivam Chaturvedi UPI QR Code"
                    className="w-48 h-48 sm:w-52 sm:h-52 object-contain rounded-xl"
                  />
                </div>
                <p className="text-sm sm:text-base font-display font-semibold text-white">
                  {bankDetails.bankName}
                </p>
                <p className="text-xs font-mono text-neutral-400 mt-1">
                  Account Holder: <span className="text-white">{bankDetails.accountHolderName}</span>
                </p>
              </div>
            ) : (
              /* Modal Body: Bank Details Content */
              <div className="space-y-3 text-left">
                {/* Bank Name */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <FaUniversity className="text-sm" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Bank Name</p>
                      <p className="text-xs sm:text-sm font-semibold text-white">{bankDetails.bankName}</p>
                    </div>
                  </div>
                </div>

                {/* Account Holder */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <FaUserCheck className="text-sm" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Account Holder Name</p>
                      <p className="text-xs sm:text-sm font-semibold text-white">{bankDetails.accountHolderName}</p>
                    </div>
                  </div>
                </div>

                {/* Account Number */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <HiDuplicate className="text-sm" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Account Number</p>
                      <p className="text-xs sm:text-sm font-mono font-bold text-white tracking-wider truncate">
                        {bankDetails.accountNumber}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(bankDetails.accountNumber, 'acc')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 shrink-0 ml-2"
                    style={{
                      borderColor: copiedField === 'acc' ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.15)',
                      backgroundColor: copiedField === 'acc' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      color: copiedField === 'acc' ? '#34D399' : '#D4D4D8',
                    }}
                    title="Copy Account Number"
                  >
                    {copiedField === 'acc' ? (
                      <>
                        <HiCheck className="text-sm text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <HiDuplicate className="text-sm" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* IFSC Code */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <HiDuplicate className="text-sm" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">IFSC Code</p>
                      <p className="text-xs sm:text-sm font-mono font-bold text-white tracking-wider truncate">
                        {bankDetails.ifscCode}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(bankDetails.ifscCode, 'ifsc')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 shrink-0 ml-2"
                    style={{
                      borderColor: copiedField === 'ifsc' ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.15)',
                      backgroundColor: copiedField === 'ifsc' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      color: copiedField === 'ifsc' ? '#34D399' : '#D4D4D8',
                    }}
                    title="Copy IFSC Code"
                  >
                    {copiedField === 'ifsc' ? (
                      <>
                        <HiCheck className="text-sm text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <HiDuplicate className="text-sm" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
