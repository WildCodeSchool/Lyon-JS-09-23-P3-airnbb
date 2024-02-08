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
    case "UPDATE_CHILDREN":
      return {
        children: [
          action.payload,
          // eslint-disable-next-line no-underscore-dangle
          ...state.children.filter((child) => child._id !== action.payload._id),
        ],
      };
    case "DELETE_CHILDREN":
      return {
        children: state.children.filter(
          // eslint-disable-next-line no-underscore-dangle
          (child) => child._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

// format date for <input type="date">
export const formatDate = (date) => {
  return new Date(date).toISOString().substring(0, 10);
};

// check if all fields are filled
export const checkFieldsFilled = (arrayToCheck) => {
  return !arrayToCheck.some((value) => value === "");
};

// set maximal age a child can have
export const maximalAge = () => {
  const currentDate = new Date();

  const threeYearsAgo = new Date(currentDate);
  threeYearsAgo.setFullYear(currentDate.getFullYear() - 3);

  const formattedDate = threeYearsAgo.toISOString().split("T")[0];

  return formattedDate;
};
