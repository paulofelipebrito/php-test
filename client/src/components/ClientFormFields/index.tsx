import { FormProvider } from 'react-hook-form';
import Input from '../UI/Input';
import ControlledSimpleSelect from '../UI/ControlledSimpleSelect';
import ControlledCalendar from '../UI/ControlledCalendar';
import { DialogActions } from '@mui/material';
import { Button } from '../UI/Button';
import { Client } from '../../types/Clients';
import { applyCpfMask } from '../../utils/cpfMask';
import { genderOptions } from '../../constants/genderOptions';
import useClientFormFields from './useClientFormFields';

type ClientFormFieldsProp = {
  setClientsRefetch: React.Dispatch<React.SetStateAction<boolean>>
  clientEditing: Client;
  onClose: () => void;
}

const ClientFormFields = ({
  setClientsRefetch, 
  clientEditing, 
  onClose
}:ClientFormFieldsProp) => {
  const {
    width,
    birthday,
    form,
    register,
    setValue,
    control,
    handleSubmit,
    isSubmiting
   } = useClientFormFields(
      clientEditing, 
      setClientsRefetch, 
      onClose
   );

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 m-4"
      >
        <div className='w-full flex items-center justify-between gap-2 mb-4 flex-col md:flex-row'>
          <Input
            label="Nome"
            {...register('name')}
            key={'name'}
            name={'name'}
            required={true}
            wrapperClassname="w-full md:w-1/3"
            className="w-full"
          />
          <Input
            label="CPF"
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
            required={true}
            wrapperClassname="w-full md:w-1/4"
            className="w-full"
          />
          <ControlledSimpleSelect
            values={genderOptions}
            title="Sexo"
            control={control}
            required={true}
            key={'gender'}
            name={'gender'}
            multiple={false}
            width={width < 768 ? `${width - 64}px` : "10rem"}
            wrapperClassname="w-full md:w-auto"
            LabelClassName="font-medium text-sm text-primary"
          />
          <ControlledCalendar
            title="Data de Nasc."
            control={control}
            defaultValue={birthday}
            {...register(`birthday`)}
            width={width < 768 ? `${width - 64}px` : "150px"}
            required
          />
        </div>
        <div className='w-full flex items-center justify-between gap-2 mb-4 flex-col md:flex-row'>
          <Input
            label="Estado (UF)"
            {...register('state')}
            maxLength={2}
            key={'state'}
            name={'state'}
            required={true}
            wrapperClassname="w-full md:w-1/4"
            className="w-full"
          />
          <Input
            label="Cidade"
            {...register('city')}
            key={'city'}
            name={'city'}
            required={true}
            wrapperClassname="w-full md:w-1/2"
            className="w-full"
          />
          <Input
            label="Endereço"
            required={true}
            {...register('address')}
          />
        </div>

        <DialogActions
            sx={{
              width: 'full',
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '25px',
              marginX: '10px',
            }}
          >
            <Button
              type="button"
              className="bg-white border-2 hover:bg-[#e9eaf1] border-darkerPrimary text-darkerPrimary min-w-36"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="min-w-36"
              isLoading={isSubmiting}
            >
              Confirmar
            </Button>
          </DialogActions>
      </form>
    </FormProvider>
  );
};

export default ClientFormFields;
