// app/components/Button/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
  }
  
  const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
    const baseClasses = 'font-bold py-2 px-4 rounded';
    const variantClasses =
      variant === 'primary'
        ? 'bg-blue-500 hover:bg-blue-600 text-white'
        : 'bg-gray-500 hover:bg-gray-600 text-white';
  
    return (
      <button className={`${baseClasses} ${variantClasses}`} {...props}>
        {children}
      </button>
    );
  };
  
  export default Button;
  