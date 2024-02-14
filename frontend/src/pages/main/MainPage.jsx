// react
import { useState, useEffect } from "react";

// react-router
import { useNavigate } from "react-router-dom";

// pages & components
import Nursery from "../../components/Nursery";

// context
import useParentContext from "../../hooks/useParentContext";

// styles
import "./styles/MainPage.css";

function MainPage() {
  const [nurseries, setNurseries] = useState(null);
  const navigate = useNavigate();
  const { parentContext } = useParentContext();
  useEffect(() => {
    const fetchNurseries = async () => {
      try {
        if (!parentContext || !parentContext.token) {
          throw new Error("Authentication token not available.");
        }
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/nursery`,
          {
            headers: {
              Authorization: `Bearer ${parentContext.token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch nursery data.");
        }
        const json = await response.json();
        setNurseries(json);
      } catch (error) {
        console.error(error);
        navigate("/");
      }
    };
    fetchNurseries();
  }, [parentContext, navigate]);
  if (!parentContext) {
    return null;
  }
  return (
    <main className="mainPage">
      {nurseries &&
        nurseries.map((nursery) => {
          const { _id: id } = nursery;
          return <Nursery key={id} nursery={nursery} />;
        })}
    </main>
  );
}
export default MainPage;
