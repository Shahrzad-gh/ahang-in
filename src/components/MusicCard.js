import React from 'react'

export default function MusicCard(props) {
    const {music} = props
    console.log("id", music)
    return (
        <div style={{ backgroundColor:"white", margin:10, padding:5, borderRadius: 20}}>
            <img style={{margin:10}} width="50" height="50" src={music.artist.picture_small} alt="Artist picture" />
            <p style={{marginLeft:10}}>{music.title}</p>
            <p style={{marginLeft:10}}>Artist: {music.artist.name} </p>
            <a style={{marginLeft:10}} href={music.preview}>Play preview </a>
        </div>
    )
}
