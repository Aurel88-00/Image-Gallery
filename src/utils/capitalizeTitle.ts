export const capitalizeTitle = (value: string) => {
  const firstLetter = value.charAt(0).toUpperCase();
  const otherLetters = value.slice(1, value.length).toLowerCase();
  const transformedValue = firstLetter + otherLetters;

  return transformedValue;
};
