export const applyCpfMask = (value: string) => {
  const cpf = value.replace(/\D/g, '');
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const removeCpfMask = (value: string) => {
  return value.replace(/\D/g, '');
};