export const applyCpfMask = (value: string) => {
  const cpf = value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Aplica a máscara de CPF
};

export const removeCpfMask = (value: string) => {
  return value.replace(/\D/g, ''); // Remove all non-digit characters
};