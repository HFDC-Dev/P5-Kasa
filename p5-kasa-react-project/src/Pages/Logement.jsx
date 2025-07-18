import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logements from "../data.json";
import Slideshow from "../Components/Slideshow/Slideshow";
import Collapse from "../Components/Collapse/Collapse";
import "./logement.scss"

function Logement() {
  const { id } = useParams(); // On récupère l’id du logement depuis l’URL
  const navigate = useNavigate(); // Permet de rediriger l’utilisateur

  const logement = logements.find((item) => item.id === id); // On cherche le logement qui a l’id récupéré

 useEffect(() => {
    if (!logement) {
      navigate("/notfound"); // Si on trouve pas de logement on est redirigé vers la page d'erreur
    }
  }, [logement, navigate]);

  if (!logement) return null; // Si toujours rien trouvé, on affiche rien (Pour éviter que le site crash)

  return (
        <div className="logement">
      <Slideshow className="slideshow" images={logement.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement-host-rating">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
          </div>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className={n <= parseInt(logement.rating) ? "star active" : "star"}>★</span>
            ))}
          </div>
        </div>
      </div>

      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Logement;