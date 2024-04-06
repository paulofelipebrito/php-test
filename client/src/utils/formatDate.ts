export const formatDate = (date: Date) => {
  const dia = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const ano = date.getFullYear();

  return `${ano}-${mes}-${dia}`;
};
export const dateInUTCFormat = (dateString: string) => {
  const [ano, mes, dia] = dateString.split('-').map((it) => parseInt(it));
  return new Date(ano, mes - 1, dia);
};

export function removeTimeZone(date: Date) {
  return new Date(date.toISOString().split('T')[0] + 'T00:00:00');
}
