const Span = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <>
      {isMenuOpen ? (
        <>
          <span className="w-full h-1 bg-[var(--secondary-text-color)] rounded-lg translate-y-2.5 rotate-45 transition-all duration-300"></span>
          <span className="w-full h-1 bg-[var(--secondary-text-color)] rounded-lg opacity-0 duration-100"></span>
          <span className="w-full h-1 bg-[var(--secondary-text-color)] rounded-lg -translate-y-2.5 -rotate-45 transition-all duration-300"></span>
        </>
      ) : (
        <>
          <span className="w-full h-1 bg-[var(--secondary-text-color)] rounded-lg transition-all duration-300"></span>
          <span className="w-full h-1 bg-[var(--secondary-text-color)] rounded-lg transition-all duration-300"></span>
          <span className="w-full h-1 bg-[var(--secondary-text-color)] rounded-lg transition-all duration-300"></span>
        </>
      )}
    </>
  );
};

export default Span;
