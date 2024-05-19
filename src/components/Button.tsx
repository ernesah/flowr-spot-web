interface ButtonProps {
  title: string;
  type?: 'primary' | 'link';
  classes?: string;
}

const Button = ({ title, type = 'primary', classes }: ButtonProps) => {
  return (
    <button
      className={`text-sm font-medium ${
        type === 'primary'
          ? 'bg-soft-pink-gradient text-white shadow-soft-pink py-3 px-5'
          : 'text-ruddy-pink'
      } ${classes}`}
    >
      {title}
    </button>
  );
};

export default Button;
