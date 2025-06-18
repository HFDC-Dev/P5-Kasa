import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();
  return <div>Page Logement : {id}</div>;
}

export default Logement;