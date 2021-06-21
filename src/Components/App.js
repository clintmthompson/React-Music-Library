import '../Styles/App.css'
import React, {Component} from 'react'
import SongTable from './MusicTable'
import axios from 'axios'
import NewSong from './AddSong'

class App extends Component {
  state = {
    songs: []
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
       genre: response.data[i].genre, 
       release_date: response.data[i].release_date,
       id: response.data[i].id
       }
       this.setState({ songs: this.state.songs.concat(newSong)})
   }
}



  render() {
    return(
      <React.Fragment>
        <SongTable songs={this.state.songs}/>
        <NewSong />
      </React.Fragment>
    )
  }
}

export default App