export const validateValueInArray = (
  array: any,
  property: string,
  value: any
) => {
  let found = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i][property] === value) {
      found = true;
      break;
    }
  }

  return found;
};
