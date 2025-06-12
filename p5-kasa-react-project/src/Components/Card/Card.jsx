import "./card.scss"

function Card({ title, image }) {
    return (
       <div className="card-container">
            <div className="card">
                <img src={image} alt={title} className="card-image" />
                <h3>{title}</h3>
            </div>
       </div>
    )
}

export default Card