// proptypes
import { PropTypes } from "prop-types";

// react
import { useEffect, useState } from "react";

// library
import { ChevronLeftIcon, UserPlusIcon } from "@heroicons/react/24/solid";

// pages & components
import ChildForm from "./ChildForm";
import ChildCard from "../../components/ChildCard";

// hooks
import useChildContext from "../../hooks/useChildContext";

// style
import "./styles/ChildList.css";
import NotFound from "../../assets/notFound.svg";

function ChildList({
  sectionChildrenHidden,
  setSectionChildrenHidden,
  parentContext,
}) {
  const { children, dispatch } = useChildContext();
  const [addChildSectionHidden, setAddChildSectionHidden] = useState(true);
  const [updateChild, setUpdateChild] = useState({});

  useEffect(() => {
    const fetchChild = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/child`,
        {
          headers: {
            Authorization: `Bearer ${parentContext.token}`,
          },
        }
      );
      const userChildren = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_CHILDREN", payload: userChildren });
      }
    };
    fetchChild();
  }, [dispatch]);

  const handleSection = () => {
    setSectionChildrenHidden(!sectionChildrenHidden);
  };

  const handleAddChild = () => {
    setAddChildSectionHidden(!addChildSectionHidden);
  };

  return (
    <div
      className={
        sectionChildrenHidden
          ? "childrenSectionContainer"
          : "childrenSectionContainer childrenSectionNotHidden"
      }
    >
      <div className="childList">
        <div className="buttonContainer">
          <button type="button" onClick={handleSection} aria-label="go back">
            <ChevronLeftIcon width={35} />
          </button>
          {children?.length > 0 ? (
            <h3 className="headerTitle">Mes enfants</h3>
          ) : (
            <h3 className="headerTitle">
              Vous n'avez pas encore enregistré d'enfant
            </h3>
          )}

          <button
            type="button"
            onClick={handleAddChild}
            aria-label="add a child"
          >
            <UserPlusIcon width={40} fill="#882bff" />
          </button>
        </div>

        {children?.length > 0 ? (
          children.map((child) => {
            const { _id: id } = child;
            return (
              <ChildCard
                key={id}
                child={child}
                setAddChildSectionHidden={setAddChildSectionHidden}
                setUpdateChild={setUpdateChild}
              />
            );
          })
        ) : (
          <img className="imgNoChildren" src={NotFound} alt="pas d'enfants'" />
        )}
      </div>
      <ChildForm
        setAddChildSectionHidden={setAddChildSectionHidden}
        addChildSectionHidden={addChildSectionHidden}
        parentContext={parentContext}
        updateChild={updateChild}
        setUpdateChild={setUpdateChild}
      />
    </div>
  );
}

ChildList.propTypes = {
  sectionChildrenHidden: PropTypes.bool.isRequired,
  setSectionChildrenHidden: PropTypes.func.isRequired,
  parentContext: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChildList;
