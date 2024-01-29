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

// reload child list as soon as the child is created
export const childrenReducer = (state, action) => {
  switch (action.type) {
    case "SET_CHILDREN":
      return {
        children: action.payload,
      };
    case "CREATE_CHILDREN":
      return {
        children: [action.payload, ...state.children],
      };
    default:
      return state;
  }
};
