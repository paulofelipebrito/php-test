/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { applyCpfMask, removeCpfMask } from '../../utils/cpfMask';
import ClientService from '../../services/ClientService';
import { Client } from '../../types/Clients';

const schema = z.object({
  cpf:  z.string().min(11, 'CPF inválido'),
  name: z.string().min(1, 'Nome é obrigatório'),
  birthday: z.date(),
  gender: z.string(),
  address: z.string(),
  state: z.string(),
  city: z.string(),
});

export type FormData = z.infer<typeof schema>;

const useClientFormFields = (
  clientEditing: Client,
  setClientsRefetch: React.Dispatch<React.SetStateAction<boolean>>,
  onClose: () => void
  ) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth); // Adjust the breakpoint as needed
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const form = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    setValue,
    watch,
    control,
    reset,
  } = form;

  const birthday = watch('birthday');

  useEffect(() => {
    if(Object.keys(clientEditing).length > 0){
      setValue('cpf', applyCpfMask(clientEditing.cpf));
      setValue('name', clientEditing.name);
      setValue('birthday', new Date(clientEditing?.birthday));
      setValue('gender', clientEditing.gender);
      setValue('address', clientEditing.address);
      setValue('state', clientEditing.state);
      setValue('city', clientEditing.city);
    }
  }, [setValue, clientEditing, watch]);

  const  handleSubmit = hookFormHandleSubmit(
    async (data) => {
    setIsSubmiting(true);
    if(Object.keys(clientEditing).length > 0){
      try {
        await ClientService.changeClient(
          clientEditing.id,
          removeCpfMask(data.cpf),
          data.name,
          data.gender,
          data.birthday, 
          data.state,
          data.city,
          data.address,         
        );
        
        toast.success(`Cliente cadastrado com sucesso.`, {
          theme: 'colored',
          toastId: 'success',
        });
        reset();
        onClose();
      } catch (error: any) {
        toast.error(
          `Erro ao cadastrar cliente: ${error?.response?.data?.error}`,
          {
            theme: 'colored',
            toastId: `error-training`,
          },
        );
        throw error;
      } finally {
        setClientsRefetch(true);
        setIsSubmiting(false);
      }
    } else {
      try {
        await ClientService.addClient(
          removeCpfMask(data.cpf),
          data.name,
          data.gender,
          data.birthday, 
          data.state,
          data.city,
          data.address,
        );
          
        toast.success(`Cliente cadastrado com sucesso`, {
          theme: 'colored',
          toastId: 'success',
        });
        setClientsRefetch(true);
        reset();
        onClose();
      } catch (error: any) {
        toast.error(
          `Erro ao cadastrar cliente: ${error?.response?.data?.error}`,
          {
            theme: 'colored',
            toastId: `error-training`,
          },
        );
        throw error;
      } finally {
        setIsSubmiting(false);
      }
    }

  })
  return {
    birthday,
    form,
    register,
    setValue,
    control,
    handleSubmit,
    isSubmiting,
    width
  }
}

export default useClientFormFields