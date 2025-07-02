import { Link } from "react-router-dom";
import "./card.scss"

function Card({ id, title, image }) {
    return ( // On entoure toute la carte avec un lien. Quand on clique dessus, on va sur la page du logement
        <Link to={`/logement/${id}`} className="card-link"> 
        <div className="card-container">
            <div className="card">
                <img src={image} alt={title} className="card-image" />
                <div className="card-overlay">
                    <h3 className="card-title">{title}</h3>
                </div>
            </div>
       </div>
        </Link>
    )
}

export default Card