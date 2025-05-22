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
    <div
      className={`
        inline-block 
        rounded-[52px]
        bg-[var(--color-button-bg)]
        p-[2px] 
        w-[170px]
        h-[60px]
        shadow-lg
      `}
    >
      <button
        type={type}
        onClick={onClick}
        className={`  
          px-4 py-2 
          rounded-[52px] 
          border-2 
          mt-[5px]
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
    </div>
  );
}
