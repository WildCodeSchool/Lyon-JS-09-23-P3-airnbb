import useNurseryContext from "./useNurseryContext";

const useNurseryLogout = () => {
  const { dispatch } = useNurseryContext();
  const logout = () => {
    localStorage.removeItem("pro");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};

export default useNurseryLogout;
