import React from "react";

function GifList({images}){

    return(
        <div>
            <img src={images.url} alt=" Raiders...what happened??" />
        </div>
    )
}

export default GifList