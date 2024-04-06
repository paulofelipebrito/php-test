import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import Spinner from './Spinner';
import { cn } from '../../utils/cs';

const buttonVariants = cva(
  'inline-flex items-center h-8 justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 text-white ',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'ring-1 ring-primary bg-transparent hover:bg-accent hover:text-accent-foreground text-primary hover:bg-primary/10',
        secondary:
          'bg-darkerPrimary text-secondary-foreground hover:bg-primary/80 text-white',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const spinnerVariantes = {
  default: '#FFF',
  destructive: '#193CB9',
  outline: '#193CB9',
  secondary: '#193CB9',
  ghost: '#193CB9',
  link: '#193CB9',
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  displayValue?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      children,
      asChild = false,
      displayValue,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const buttonStyle = displayValue ? { display: displayValue } : {};

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={isLoading || props.disabled}
        style={buttonStyle}
      >
        {isLoading ? (
          <Spinner color={spinnerVariantes[variant ?? 'default']} size={25} />
        ) : (
          children
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
