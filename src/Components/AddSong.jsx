import axios from 'axios';
import React, {Component} from 'react';

class NewSong extends Component {

    state = {
        
    }



    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/music/',{
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            genre: this.state.genre,
            release_date: this.state.release_date
        })
        window.location.reload();
        
}



    render(){
        return(
            <div>

            <h1>Add Song to Library</h1>
            <form onSubmit={(event) => this.handleSubmit(event)}>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title"  onChange={this.handleChange} value={this.state.title}/><br />
            <label htmlFor="artist">Artist: </label>
            <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/><br />
            <label htmlFor="album">Album: </label>
            <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/><br />
            <label htmlFor="genre">Genre: </label>
            <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/><br />
            <label htmlFor="release_date">Release Date: </label>
            <input type="text" name="release_date" onChange={this.handleChange} value={this.state.release_date}/><br />
            <button type='submit'>Add Song</button>
            </form><br /><br />

            </div>
        )
    }



}

export default NewSong