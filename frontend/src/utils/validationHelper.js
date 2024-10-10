export function isValidEmail(email) {
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  return emailRegex.test(email);
}
export function isValidNumber(value) {
  return (
    !isNaN(value) &&
    (typeof value === 'number' ||
      (typeof value === 'string' && value.trim() !== ''))
  );
}
export const emptyValidator = (val) => val !== null && val !== '';
export const stringValidator = (val) => val && val.length > 0;
export const numberValidator = (val) =>
  val !== null && val !== '' && isValidNumber(val);
export const emailValidator = (val) =>
  val !== null && val !== '' && isValidEmail(val);


export function validateUsername(username) {
  // Regular expression to check if the username contains only alphanumeric characters
  const usernameRegex = /^[a-zA-Z0-9]+$/;

  // Test the username against the regular expression
  if (usernameRegex.test(username)) {
    return true; // Username is valid
  } else {
    return false; // Username is invalid
  }
}
export function convertToUsername(str) {
  // Use regular expression to replace non-alphanumeric characters with an empty string
  const convertedUsername = str.replace(/[^a-zA-Z0-9]/g, '');

  return convertedUsername;
}
