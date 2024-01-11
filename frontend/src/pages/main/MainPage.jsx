import { useLoaderData } from "react-router-dom";
import Nursery from "../../components/Nursery";

export async function loader() {
  const response = await fetch("http://localhost:3310/nursery");
  const json = await response.json();
  return json;
}

function MainPage() {
  const nurseries = useLoaderData();
  console.info(nurseries);
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
