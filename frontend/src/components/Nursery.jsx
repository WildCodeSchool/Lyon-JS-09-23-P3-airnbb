// proptypes
import { PropTypes } from "prop-types";

// library
import { HeartIcon } from "@heroicons/react/24/solid";

import { useState } from "react";
import "./style/Nursery.css";

function Nursery({ nursery }) {
  const { name, address, place_max: placeMax } = nursery;
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
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
          <div className="grade">3.9</div>
        </div>
      </div>
      <div className="bottom">
        <div className="nurseryInfo">
          <p>{address}</p>
          <span>{placeMax}</span>
        </div>
        <div className="disponibilities">
          <div className="monday">Lun. 15</div>
          <div className="tuesday">Mar. 16</div>
          <div className="wednesday">Mer. 17</div>
          <div className="thursday">Jeu. 18</div>
          <div className="friday">Ven. 19</div>
          <div className="saturday">Sam. 20</div>
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
  }).isRequired,
};

export default Nursery;
