import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.title} className="card__image" />
            <div className="card__content">
                <div className="card__location-wrapper">
                    <div className="card__location-country">
                        <svg 
                            width="7" 
                            height="10" 
                            viewBox="0 0 7 10" 
                            fill="none"
                            className="card__location-icon"
                        >
                            <path 
                                fill-rule="evenodd" 
                                clip-rule="evenodd" 
                                d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z" 
                                fill="#F55A5A" 
                            />
                        </svg>
                        <h3 className="card__location">{props.location}</h3>
                    </div>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer" className="card__location-link">View on Google Maps</a>
                </div>
                <h2 className="card__title">{props.title}</h2>
                <h4 className="card__date">{props.startDate} - {props.endDate}</h4>
                <p className="card__description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;