import { useContext } from "react";
import { ParentAuthContext } from "../contexts/ParentContext";

const useParentContext = () => {
  const useParent = useContext(ParentAuthContext);
  if (!useParent) {
    throw Error("useParent must be used in useParentContext");
  }
  return useParent;
};

export default useParentContext;
