import notFound from "../assets/notFound.svg";

function NotFound() {
  return (
    <div className="notFoundContainer">
      <h2>Oulah, vous êtes perdu !</h2>
      <small>
        J&apos;espère que vous faites davantage <br /> attention avec vos
        enfants ...
      </small>
      <img src={notFound} alt="Not Found" />
    </div>
  );
}

export default NotFound;
