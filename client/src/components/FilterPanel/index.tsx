import { HiOutlineFilter } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { cn } from '../../utils/cs';
import { ClientDto } from '../../types/Clients';
import { Button } from '../UI/Button';
import { FormProvider } from 'react-hook-form';
import Input from '../UI/Input';
import ControlledSimpleSelect from '../UI/ControlledSimpleSelect';
import { genderOptions } from '../../constants/genderOptions';
import { applyCpfMask } from '../../utils/cpfMask';
import ControlledCalendar from '../UI/ControlledCalendar';
import useFilterPanel from './useFilterPanel';

type FilterPanelProps = {
  defaultFilters: ClientDto;
  applyChanges: (isReseting: boolean, appliedFilters: ClientDto) => void
}

const FilterPanel = ({
  defaultFilters,
  applyChanges,
}: FilterPanelProps) => {
  const {
    isOpen,
    form,
    setValue,
    control,
    register,
    handleOpenFilter,
    handleSubmit,
    handleResetFilters
  } = useFilterPanel(
    defaultFilters,
    applyChanges
  );

  return (
    <div
      className={`fixed h-screen w-64 top-0 bg-primary ${
        isOpen ? 'right-0' : '-right-64'
      } transition-all duration-500 z-20`}
    >
      <div className="relative w-full h-full px-4 py-6">
        <button
          type="button"
          className={twMerge(
            'absolute -left-8 top-16 bg-primary p-2 py-3 pr-4 rounded-lg',
          )}
          onClick={handleOpenFilter}
        >
          <HiOutlineFilter className="w-5 h-5" color="white" />
        </button>

        <div
          className={cn('h-full flex flex-col overflow-hidden', {
            hidden: !isOpen,
          })}
        >
          <h1 className="font-bold text-2xl text-white mb-8">Filtros</h1>

          <FormProvider {...form}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col h-full gap-8 px-2 justify-start overflow-hidden"
            >
              <Input
                label="CPF"
                labelClassName="text-white"
                {...register('cpf', {
                  onChange: (e) => {
                    let cpf = e.target.value;
                    cpf = cpf.replace(/\D/g, '');
                    const maskedCpf = applyCpfMask(cpf);
                    setValue('cpf', maskedCpf);
                  }
                })}
                key={'cpf'}
                name={'cpf'}
                wrapperClassname="w-full"
                className="w-full"
              />
              <ControlledSimpleSelect
                values={[{ value: "", label: ""}, ...genderOptions]}
                title="Sexo"
                control={control}
                key={'gender'}
                name={'gender'}
                multiple={false}
                width="auto"
                background="#fff"
                LabelClassName="font-medium text-sm text-white"
              />
              <ControlledCalendar
                title="Data de Nasc."
                LabelClassName="text-white"
                control={control}
                {...register(`birthday`)}
                width="auto"
                background="#fff"
              />
              <Input
                label="Estado (UF)"
                labelClassName="text-white"
                {...register('state')}
              />
              <Input
                label="Cidade"
                labelClassName="text-white"
                {...register('city')}
              />
              <Input
                label="Endereço"
                labelClassName="text-white"
                {...register('address')}
              />

              <div className="flex flex-col items-center gap-2 h-full justify-end">
                <Button
                  type='submit'
                  variant={'secondary'}
                  className=" mt-9 w-full"
                  onClick={handleSubmit}
                >
                  Aplicar Filtros
                </Button>

                <Button
                  type='button'
                  variant={'link'}
                  className="underline text-white"
                  onClick={handleResetFilters}
                >
                  Limpar filtros
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
