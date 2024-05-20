interface ButtonProps {
  title: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'link';
  classes?: string;
  isSubmitting?: boolean;
  handleClick?: () => void;
}

const Button = ({
  title,
  type = 'button',
  variant = 'primary',
  classes,
  isSubmitting,
  handleClick
}: ButtonProps) => {
  return (
    <button
      className={`text-sm font-medium ${
        variant === 'primary'
          ? 'bg-soft-pink-gradient text-white shadow-soft-pink py-3 px-5'
          : 'text-ruddy-pink'
      } ${classes}`}
      type={type}
      onClick={handleClick}
      disabled={isSubmitting}
    >
      {title}
    </button>
  );
};

export default Button;
