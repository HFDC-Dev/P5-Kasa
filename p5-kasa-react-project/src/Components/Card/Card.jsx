import { Link } from "react-router-dom";
import "./card.scss"

function Card({ id, title, image }) {
    return (
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