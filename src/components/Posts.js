import React from 'react';
import data from '../data';
import TravelCard from './TravelCard';

function Posts() {
    const items = data;
    const cards  = items.map(item => {
        return (
            <TravelCard
                title={item.title}
                location={item.location}
                mapLink={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                excerpt={item.description}
                img={item.imageUrl}
            />
        )
    })
    return(
        <section className="posts">
            {cards}
        </section>
    )
}

export default Posts;