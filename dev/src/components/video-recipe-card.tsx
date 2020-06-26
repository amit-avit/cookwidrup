import React from 'react';

export interface VideoRecipeCardProps {
    title: string;
    description: string;
    videoLink: string;
}

export const VideoRecipeCard = (props: VideoRecipeCardProps) => {
    return (
        <div
            style={{
                display: "inline-block",
                height: "500px",
                maxHeight: "500px",
                maxWidth: "520px",
                paddingInlineStart: "8px",
                paddingInlineEnd: "8px",
                margin: "8px",
                borderRadius: "8px",
                backgroundColor: "antiquewhite",
                boxShadow: "0px 1.6px 3.6px rgba(0,0,0,0.13908558841119492), 0px 0px 2.9px rgba(0,0,0,0.1176878055787034)",
                textAlign: "center",
            }}
        >
            <h3 style={{marginLeft: "auto", marginRight: "auto"}}>
                {props.title}
            </h3>
            <div>
                <iframe
                    width="520"
                    height="293"
                    src={props.videoLink}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}>
                </iframe>
            </div>
            <div style={{textAlign: "initial"}}>{props.description}</div>
        </div>
    );
}
