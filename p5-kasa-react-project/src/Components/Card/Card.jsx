import "./card.scss"

function Card({ title, image }) {
    return (
       <div className="card-container">
            <div className="card">
                <img src={image} alt={title} className="card-image" />
                <div className="card-overlay">
                    <h3 className="card-title">{title}</h3>
                </div>
            </div>
       </div>
    )
}

export default Card