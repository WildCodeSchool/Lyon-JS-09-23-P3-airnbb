// proptypes
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// library
import { HeartIcon } from "@heroicons/react/24/solid";

import "./style/Nursery.css";
import useParentContext from "../hooks/useParentContext";

function Nursery({ nursery }) {
  const { parentContext } = useParentContext();
  const { name, address, place_max: placeMax } = nursery;
  const [favorite, setFavorite] = useState(false);
  const [availability, setAvailability] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
            // eslint-disable-next-line no-underscore-dangle
          }/availabilitybynursery?nurseryId=${nursery._id}`,
          {
            headers: { Authorization: `Bearer ${parentContext.token}` },
          }
        );
        const avData = await response.json();
        setAvailability(avData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAvailability();
    // eslint-disable-next-line no-underscore-dangle
  }, [nursery._id]);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  const handleDayClick = (availabilityId) => {
    navigate(`booking/${availabilityId}`);
  };

  return (
    <div className="nurseryCard">
      <div className="top">
        <HeartIcon
          width={30}
          className={favorite ? "isFavorite" : "isNotFavorite"}
          onClick={handleFavorite}
        />
        <div className="title">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="bottom">
        <div className="nurseryInfo">
          <p>{address}</p>
          <span>{placeMax}</span>
        </div>
        <div className="disponibilities">
          {availability &&
            availability.map((av) => (
              <button
                type="button"
                // eslint-disable-next-line no-underscore-dangle
                key={av._id}
                className="available"
                // eslint-disable-next-line no-underscore-dangle
                onClick={() => handleDayClick(av._id)}
              >
                {new Date(av.date).toLocaleDateString()}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
Nursery.propTypes = {
  nursery: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    place_max: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};
export default Nursery;
