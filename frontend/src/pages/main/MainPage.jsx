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
      {nurseries.map((nursery) => (
        <Nursery nursery={nursery} />
      ))}
    </main>
  );
}

export default MainPage;
