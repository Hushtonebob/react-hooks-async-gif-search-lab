import React from "react";

function GifSearch({handleClick, text, setText}){

    return(
    <div>
        <input type="text" placeholder="Gif" onChange={(e)=>{setText(e.target.value)}}/>
        <button onClick={()=>{handleClick(text)}}>Find Gifs</button>
    </div>
    )
}

export default GifSearch