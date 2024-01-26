// proptypes
import { PropTypes } from "prop-types";

// react
import { useState } from "react";

// library
import { ChevronLeftIcon, UserPlusIcon } from "@heroicons/react/24/solid";

// style
import "./styles/ChildList.css";
import ChildForm from "./ChildForm";

function ChildList({
  sectionChildrenHidden,
  setSectionChildrenHidden,
  parentId,
}) {
  /* const { children, dispatch } = useChildContext(); */
  const [addChildSectionHidden, setAddChildSectionHidden] = useState(true);

  /* useEffect(() => {
    const fetchChild = async () => {
      const response = await fetch("http://localhost:3310/child");
      const json = await response.json();
      const userChild = await json.filter(
        (child) => child.parent_id === parentId
      );
      if (response.ok) {
        dispatch({ type: "SET_CHILDREN", payload: userChild });
      }
    };
    fetchChild();
  }, []); */

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
          <button
            type="button"
            onClick={handleAddChild}
            aria-label="add a child"
          >
            <UserPlusIcon width={40} />
          </button>
        </div>

        {/*  {children &&
          children.map((child) => <ChildCard key={child._id} child={child} />)} */}
      </div>
      <ChildForm
        setAddChildSectionHidden={setAddChildSectionHidden}
        addChildSectionHidden={addChildSectionHidden}
        parentId={parentId}
      />
    </div>
  );
}

ChildList.propTypes = {
  sectionChildrenHidden: PropTypes.bool.isRequired,
  setSectionChildrenHidden: PropTypes.func.isRequired,
  parentId: PropTypes.string.isRequired,
};

export default ChildList;
