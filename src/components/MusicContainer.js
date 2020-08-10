import React from 'react'
import MusicCard from "./MusicCard"
export default function MusicContainer(props) {
    const {musicArray} = props;
    console.log("all", musicArray)

    return (
        <div>
            {musicArray && musicArray.data.map((index)=> 
                <div><MusicCard key={index.id} music={index} /></div>
                )
                }
        </div>
    )
}
