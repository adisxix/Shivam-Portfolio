const SectionHeading = ({ title, id }) => {
  return (
    <div id={id} className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight text-glow-subtle text-center">
        {title}
      </h2>
      <div className="mt-3 sm:mt-4 w-48 sm:w-96 md:w-[480px] lg:w-[600px] max-w-[80vw] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
    </div>
  );
};

export default SectionHeading;
