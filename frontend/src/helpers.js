// check if password match
export function handlePasswords(passwordOne, passwordTwo) {
  if (
    (passwordOne !== "" || passwordTwo !== "") &&
    passwordOne === passwordTwo
  ) {
    return true;
  }
  return false;
}

// regex match email syntax
export function handleEmail(email) {
  const validEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/;
  if (validEmail.test(email)) {
    return true;
  }
  return false;
}
