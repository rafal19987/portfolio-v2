const Button = ({ text }: { text: string }) => {
  return (
    <button className="w-fit h-full py-4 px-8 border border-[var(--green)] text-[var(--secondary-text-color)]  hover:bg-[var(--dark-blue)] transition-colors duration-300">
      {text}
    </button>
  );
};

export default Button;
