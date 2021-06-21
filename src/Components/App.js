import '../Styles/App.css'
import React, {Component} from 'react'
import SongTable from './MusicTable'
import axios from 'axios'
import NewSong from './AddSong'
import FilterSongs from './FilterSongs'

class App extends Component {
  state = {
    songs: [],

     }
    
     

componentDidMount(){
   this.getSongs();
}

filterSongs = (filteredSongs) => {
  console.log('From Filter Songs Function', filteredSongs)
  if (filteredSongs.title !== ''){
      let result = this.state.songs.filter(songs => songs.title === filteredSongs.title)
      this.setState({songs: result})
  }  
  else if (filteredSongs.artist !== ''){
    let result = this.state.songs.filter(songs => songs.artist === filteredSongs.artist)
    this.setState({songs: result})
  }
  else if (filteredSongs.album !== ''){
    let result = this.state.songs.filter(songs => songs.album === filteredSongs.album)
    this.setState({songs: result})
  }
  else if (filteredSongs.genre !== ''){
    let result = this.state.songs.filter(songs => songs.genre === filteredSongs.genre)
    this.setState({songs: result})
  }
  else if (filteredSongs.release_date !== ''){
    let result = this.state.songs.filter(songs => songs.release_date === filteredSongs.release_date)
    this.setState({songs: result})
  }
  // Filter the songs array
  // Update the "songs" stateful property
}

async getSongs(){
   let response = await axios.get('http://127.0.0.1:8000/music/');
   this.setState({
     songs: response.data
   })
//else filter= on (return filtered results, then filter=off)
}



  render() {
    return(
      <React.Fragment>
        <SongTable songs={this.state.songs} getSongs={this.getSongs}/>
        <NewSong />
        <FilterSongs filterSongsFunction={this.filterSongs} getSongs={this.getSongs}/>
      </React.Fragment>
    )
  }
}

export default App