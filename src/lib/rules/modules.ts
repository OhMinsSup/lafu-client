export const isEmail = (value: string) => {
  const regex = /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (regex.test(value)) {
    return true;
  }
  return false;
};
