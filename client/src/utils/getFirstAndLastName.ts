export const getFirstAndLastName = (name: string) => {
  const splittedName = name.split(' ');
  const firstName = splittedName[0];
  const lastName = splittedName[splittedName.length - 1];
  return `${firstName} ${lastName}`;
};
