interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  text,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={`
        inline-block 
        rounded-full 
        bg-[var(--color-button-bg)]
        p-[2px] 
        shadow-md
      `}
    >
      <button
        type={type}
        onClick={onClick}
        className={`
          px-8 py-4 
          rounded-full 
          border-2 
          border-[var(--color-btn-border)] 
          text-[var(--color-btn-text)]
          font-semibold 
          bg-transparent
          hover:drop-shadow-lg 
          transition 
          ${className}
        `}
      >
        {text}
      </button>
    </button>
  );
}
