import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logements from "../data.json";
import Slideshow from "../Components/Slideshow/Slideshow";

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logements.find((item) => item.id === id);

 useEffect(() => {
    if (!logement) {
      navigate("/notfound", { replace: true });
    }
  }, [logement, navigate]);

  if (!logement) return null;

  return (
    <div className="logement">
      <Slideshow images={logement.pictures} />
      {}
    </div>
  );
}

export default Logement;