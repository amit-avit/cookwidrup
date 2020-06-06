import React from 'react';

export const LasagnaRecipeVideo = () => (
    <div style={{ width: "400px", height: "300px" }}>
        <iframe
            src="https://www.youtube.com/embed/NgwiUDzMrIo"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}>
        </iframe>
    </div>
);