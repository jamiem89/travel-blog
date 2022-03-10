import React from 'react';

function TravelCard(props) {
    return(
       <article className="travel-card">
            <div className="travel-card__img-container">
                <img src={props.img} alt="" className="travel-card__img" />
            </div>
            <div className="travel-card__content">
                <div className="travel-card__meta">
                    {props.location && <span className="travel-card__location">{props.location}</span>}
                    {props.location && props.mapLink && <> – </>}
                    {props.mapLink && <a className="travel-card__map" href={props.mapLink}>View on google maps</a>}
                </div>
                <h2 className="travel-card__title">{props.title}</h2>
                <h3 className="travel-card__dates">{props.startDate} – {props.endDate}</h3>
                {props.excerpt && <p className="travel-card__excerpt">{props.excerpt}</p>}
            </div>
       </article>
    )
}

export default TravelCard;