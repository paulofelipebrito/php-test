/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MenuItem, Select, SelectProps } from '@mui/material';
import { Controller } from 'react-hook-form';
import { cn } from '../../utils/cs';

export interface Values {
  value: string | number;
  label: string | number;
}

type Props = {
  title: string;
  values?: Values[];
  width?: string;
  background?: string;
  control: any;
  name: string;
  changeItemColor?: boolean;
  changeItems?: string[];
  LabelClassName?: string;
  wrapperClassname?: string;
  fieldError?: any;
  errorMessage?: string;
} & SelectProps;

const ControlledSimpleSelect = ({
  title,
  values,
  width,
  background,
  name,
  changeItemColor,
  changeItems,
  LabelClassName,
  wrapperClassname,
  error,
  fieldError,
  errorMessage,
  ...rest
}: Props) => {

  return (
    <div className={cn("flex flex-col gap-1", wrapperClassname)}>
      <div className={cn('text-[12px] text-[#4A4A4A]', LabelClassName)}>
        {title}
        {rest.required && <span className="text-red">*</span>}
      </div>
      <Controller
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            {...rest}
            sx={{
              width: `${width ? width : '27rem'}`,
              height: '2rem',
              fontSize: '12px', 
              background: `${background ? background : 'transparent'}`,           
            }}
            displayEmpty
            multiple={rest.multiple}
            inputRef={ref}
            disabled={rest.disabled || !values}
            defaultValue={rest.defaultValue}
            onChange={(e, a) => {
              onChange(e);
              rest.onChange && rest.onChange(e, a);
            }}
            variant={rest?.variant || 'outlined'}
            onBlur={onBlur}
            value={value ? value : rest.multiple ? [] : ''}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem
              sx={{ fontSize: '12px', display: 'none' }}
              value=""
              disabled
            >
              {' '}
            </MenuItem>
            <MenuItem
              sx={{ fontSize: '12px', display: 'none' }}
              value={0}
              disabled
            >
              {' '}
            </MenuItem>
            <MenuItem
              sx={{ fontSize: '12px', display: 'none' }}
              value={-2}
              disabled
            >
              {' '}
            </MenuItem>
            {values?.map((el) => {
              if (changeItemColor) {
                return (
                  <MenuItem
                    sx={{
                      fontSize: '12px',
                      fontWeight: changeItems?.includes(el.value.toString())
                        ? 'bold'
                        : '',
                    }}
                    key={el.value}
                    value={el.value}
                  >
                    {el.label}
                  </MenuItem>
                );
              } else {
                return (
                  <MenuItem
                    sx={{
                      fontSize: '12px',
                    }}
                    key={el.value}
                    value={el.value}
                  >
                    {el.label}
                  </MenuItem>
                );
              }
            })}
          </Select>
        )}
        name={name}
        disabled={rest.disabled}
        control={rest.control}
      />
      {fieldError && (
        <div className="text-[10px] text-[#dd0000]">{errorMessage}</div>
      )}
    </div>
  );
};

export default ControlledSimpleSelect;
