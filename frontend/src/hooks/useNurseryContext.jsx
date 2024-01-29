import { useContext } from "react";
import { NurseryAuthContext } from "../contexts/NurseryContext";

const useNurseryContext = () => {
  const useNursery = useContext(NurseryAuthContext);
  if (!useNursery) {
    throw Error("useNursery must be used in useNurseryContext");
  }
  return useNursery;
};

export default useNurseryContext;
