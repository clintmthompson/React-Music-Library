import React, { Component } from "react"

class SongTable extends Component{
    state = {
        songs: [
            {
                title: 'test title 1',
                artist: '1',
                album: '1',
                release_date: '1980-10-31'
            },
            {
                title:'test title 2',
                artist: '2',
                album: '2',
                release_date: '1980-10-31'
            },
            {
                title:'test title 3',
                artist: '3',
                album: '3',
                release_date: '1980-10-31'
            },
        ]
    }


    render() {
        return (
        <div>

            <h1 >Music Library:</h1>

            <table style={{border:'1px solid black'}}>
                <tr style={{border:'1px solid black'}}>
                    <th style={{border:'1px solid black'}}>Title</th>
                    <th style={{border:'1px solid black'}}>Artist</th>
                    <th style={{border:'1px solid black'}}>Album</th>
                    <th style={{border:'1px solid black'}}>Release Date</th>
                </tr>

                {this.state.songs.map((songs) => (
                    <tr style={{border:'1px solid black'}}>
                        <td style={{border:'1px solid black'}}>{songs.title}</td>
                        <td style={{border:'1px solid black'}}>{songs.artist}</td>
                        <td style={{border:'1px solid black'}}>{songs.album}</td>
                        <td style={{border:'1px solid black'}}>{songs.release_date}</td>
                    </tr>
                ))}
            </table><br />

                
        </div>
        )
}
}

export default SongTable