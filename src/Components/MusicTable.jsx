import React, { Component } from "react"
import axios from 'axios'

class SongTable extends Component{
    state = {
        songs: [

        ]
    }


    componentDidMount(){
        this.getSongs();
    }

    async getSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');

        let i
        
        for(i = 0; i < response.data.length; i++){
            const newSong={ 
            title: response.data[i].title, 
            artist: response.data[i].artist, 
            album: response.data[i].album, 
            release_date: response.data[i].release_date
            }
            this.setState({ songs: this.state.songs.concat(newSong)})
        }
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