import React from 'react';
import { data } from '../data';
import { VideoRecipeCard } from './video-recipe-card';

export const VideoCardsContainer = () => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
            }}
        >
            {data.videoCards.map((props) => <VideoRecipeCard {...props} key={props.title} />)}
        </div>
    );
}
