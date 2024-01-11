import { useLoaderData } from "react-router-dom";
import Nursery from "../../components/Nursery";

export async function loader() {
  const response = await fetch("http://localhost:3310/nursery");
  const json = await response.json();
  return json;
}

function MainPage() {
  const data = useLoaderData();
  console.info(data);
  return (
    <>
      <h1>MainPage</h1>
      <Nursery />
    </>
  );
}

export default MainPage;
