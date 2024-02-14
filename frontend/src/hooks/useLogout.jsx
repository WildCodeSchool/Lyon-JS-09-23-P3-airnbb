import useParentContext from "./useParentContext";

const useLogout = () => {
  const { dispatch } = useParentContext();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};

export default useLogout;
