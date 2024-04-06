import { useState } from "react";
import { ClientDto } from "../../types/Clients";
import { removeCpfMask } from "../../utils/cpfMask";
import { useForm } from "react-hook-form";

const useFilterPanel = (
  defaultFilters: ClientDto,
  applyChanges: (isReseting: boolean, appliedFilters: ClientDto) => void
) => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<ClientDto>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: defaultFilters
  });

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    setValue,
    control,
  } = form;


  const handleOpenFilter = () => {
    setIsOpen((old) => !old);
  };

  const handleResetFilters = () => {
    setIsOpen(false);
    applyChanges(true, {} as ClientDto);
  };

  const  handleSubmit = hookFormHandleSubmit(
    async (data) => {
      setIsOpen(false);
      applyChanges(false, {
        cpf: removeCpfMask(data.cpf),
        name: data.name,
        birthday: data.birthday,
        gender: data.gender,
        address: data.address,
        state: data.state,
        city: data.city,
      });
  })

  return {
    isOpen,
    form,
    setValue,
    control,
    register,
    handleOpenFilter,
    handleSubmit,
    handleResetFilters
  }
}

export default useFilterPanel