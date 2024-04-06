/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Controller, FieldError } from 'react-hook-form';
import { ptBR } from '@mui/x-date-pickers/locales';
import br from 'date-fns/locale/pt-BR';
import { cn } from '../../utils/cs';
interface Props extends DatePickerProps<any> {
  title: string;
  width?: string;
  name: string;
  control: any;
  setCalendar?: (value: boolean) => void;
  fieldError?: FieldError;
  required?: boolean;
  errorMessage?: string;
  background?: string;
  LabelClassName?: string;
}

const ControlledCalendar = ({
  title,
  width,
  name,
  setCalendar,
  fieldError,
  required,
  errorMessage,
  background,
  LabelClassName,
  ...rest
}: Props) => {
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);

  return (
    <div className='flex flex-col gap-1'>
      {title ? (
          <label className={cn("font-medium text-sm text-primary", LabelClassName || "")}>
            {title}
            {required && <span className="text-red">*</span>}
          </label>
        ) : null}
      <Controller
        render={({ field: { onChange, value, ref, ...controllerRest } }) => {
          const dateValue = value ? new Date(value) : undefined;
          dateValue && dateValue.setDate(dateValue.getDate());
          return (
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            localeText={
              ptBR.components.MuiLocalizationProvider.defaultProps.localeText
            }
            adapterLocale={br}
          >
            <DatePicker
              inputRef={ref}
              className="date-input-lowercase"
              {...rest}
              {...controllerRest}
              slotProps={{
                field: {
                  readOnly: true,
                },
                textField: {
                  placeholder: 'dd/mm/aaaa',
                },
                actionBar: {
                  actions: ['clear'],
                },
              }}
              sx={{
                width: `${width ? width : '27rem'}`,
                '& .MuiInputBase-root': {
                  height: '2rem',
                  fontSize: '12px',
                },
                background: `${background ? background : 'transparent'}`,           
              }}
              defaultValue={rest.defaultValue}
              value={dateValue}
              disabled={rest.disabled}
              onChange={(e, a) => {
                onChange(e, a);
                rest.onChange && rest.onChange(e, a);
              }}
              open={calendarIsOpen}
              onClose={() => {
                setCalendarIsOpen(false);
                setCalendar && setCalendar(false);
              }}
              onOpen={() => {
                setCalendarIsOpen(true);
                setCalendar && setCalendar(true);
              }}
              disableFuture
            />
          </LocalizationProvider>
        )}}
        name={name}
      />
      {fieldError && (
        <div className="text-[10px] text-[#dd0000]">{errorMessage}</div>
      )}
    </div>
  );
};

export default ControlledCalendar;