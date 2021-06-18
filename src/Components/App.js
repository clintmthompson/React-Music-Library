import '../Styles/App.css'
import React, {Component} from 'react'
import SongTable from './MusicTable'

class App extends Component {
  state = {   }

  render() {
    return(
      <React.Fragment>
        <SongTable />
      </React.Fragment>
    )
  }
}

export default App