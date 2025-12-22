import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  href?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  href,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-light tracking-wide text-sm transition-all duration-300 cursor-pointer border";
  
  const variants = {
    primary: "bg-navy-dark border-navy-dark text-white hover:bg-navy-medium",
    secondary: "bg-transparent border-white/30 text-white hover:border-white hover:bg-white/10",
    outline: "bg-transparent border-white text-white hover:bg-white hover:text-navy-dark"
  };

  const ButtonContent = (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return <a href={href}>{ButtonContent}</a>;
  }

  return ButtonContent;
}
