interface ButtonProps {
  title: string;
  type?: 'primary' | 'link';
  classes?: string;
  isSubmitting?: boolean;
  handleClick?: () => void;
}

const Button = ({
  title,
  type = 'primary',
  classes,
  isSubmitting,
  handleClick
}: ButtonProps) => {
  return (
    <button
      className={`text-sm font-medium ${
        type === 'primary'
          ? 'bg-soft-pink-gradient text-white shadow-soft-pink py-3 px-5'
          : 'text-ruddy-pink'
      } ${classes}`}
      onClick={handleClick}
      disabled={isSubmitting}
    >
      {title}
    </button>
  );
};

export default Button;
