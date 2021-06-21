import React, {Component} from 'react';

class FilterSongs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
         }
    }

     handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

     handleSubmit = (event) => {
        event.preventDefault()
        this.props.filterSongsFunction(this.state);

        }

    render() { 
        return (  <div>

            <h1>Filter Songs By:</h1>

            
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title"  onChange={this.handleChange} value={this.state.title}/>
            <button type='submit'>Filter</button><br />
            </form>

            <form onSubmit={this.handleSubmit}>
            <label htmlFor="artist">Artist: </label>
            <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
            <button type='submit'>Filter</button><br />
            </form>

            <form onSubmit={this.handleSubmit}>
            <label htmlFor="album">Album: </label>
            <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
            <button type='submit'>Filter</button><br />
            </form>
            
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="genre">Genre: </label>
            <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
            <button type='submit'>Filter</button><br />
            </form>

            <form onSubmit={this.handleSubmit}>
            <label htmlFor="release_date">Release Date: </label>
            <input type="text" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
            <button type='submit'>Filter</button><br />
            </form>


            

            </div> );
    }
}
 
export default FilterSongs;
