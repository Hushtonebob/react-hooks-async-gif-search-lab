import React, {useEffect, useState} from "react";
import GifList from "./GifList" 

function GifListContainer({search, render}){

    const [gifsObj, setGifsObj] = useState([]);

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=3htFx8gKAVovUa7e3L4pUzNaeFWxpyja&rating=g`)
        .then(res=>res.json())
        .then(data=>{console.log(data); setGifsObj(data.data)})
    },[render])

    const displayGifs = gifsObj.map((gif)=>{
        return(
            <li>
                <GifList key={gif.id} gif={gif} images={gif.images.original} />
            </li>
        )
    })

    return(
        <div>{displayGifs}</div>
    )
}

export default GifListContainer