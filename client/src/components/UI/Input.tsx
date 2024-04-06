import { forwardRef } from 'react';
import { cn } from '../../utils/cs';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  wrapperClassname?: string;
  labelClassName?: string;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, required, wrapperClassname, labelClassName, ...rest }, ref) => {
    return (
      <div className={cn("flex flex-col w-full gap-1", `${wrapperClassname ?? ''}`)}>
        {label ? (
          <label className={cn("font-medium text-sm text-primary", labelClassName ?? '')}>
            {label}
            {required && <span className="text-red">*</span>}
          </label>
        ) : null}

        <input
          {...rest}
          ref={ref}
          required={required}
          className={cn('w-full h-8 border px-3 border-[#D8D8D8] active:border-[#cbcbcb] rounded-md font-graphie', `${
            rest.className ?? ''
          }`)}
        />
      </div>
    );
  },
);

export default Input;
