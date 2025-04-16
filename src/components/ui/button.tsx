
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  href?: string;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const buttonVariants = cva(
  "inline-block font-inter font-medium rounded-md transition-all duration-300 transform hover:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-dark",
        secondary: "bg-secondary text-primary hover:bg-gray-100 border border-primary",
        outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
        gold: "bg-gold text-white hover:bg-gold-dark",
      },
      size: {
        sm: "py-1 px-3 text-sm",
        md: "py-2 px-6",
        lg: "py-3 px-8 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonPropsWithVariants extends ButtonProps, VariantProps<typeof buttonVariants> {}

export type ButtonType = React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({ 
  children, 
  onClick, 
  href, 
  to,
  variant = 'primary', 
  size = 'md',
  className = '',
  fullWidth = false,
  disabled = false,
  ...props
}, ref) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-secondary text-primary hover:bg-gray-100 border border-primary';
      case 'outline':
        return 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white';
      case 'gold':
        return 'bg-gold text-white hover:bg-gold-dark';
      default:
        return 'bg-primary text-white hover:bg-primary-dark';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'py-1 px-3 text-sm';
      case 'lg':
        return 'py-3 px-8 text-lg';
      default:
        return 'py-2 px-6';
    }
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const buttonClasses = `
    inline-block font-inter font-medium rounded-md 
    transition-all duration-300 transform hover:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
    ${getVariantClasses()} ${getSizeClasses()} ${fullWidth ? 'w-full' : ''} ${disabledClasses} ${className}
  `;

  if (href) {
    return (
      <a href={href} className={buttonClasses} aria-disabled={disabled} ref={ref as React.Ref<HTMLAnchorElement>} {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={buttonClasses} aria-disabled={disabled} ref={ref as React.Ref<HTMLAnchorElement>} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled} ref={ref as React.Ref<HTMLButtonElement>} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
export default Button;
