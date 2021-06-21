import axios from 'axios'


const SongTable = (props) => {

    
        const deleteSong = async (id) => {
            await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
            window.location.reload();
        }


        return (
        <div>

            <h1 >Music Library:</h1>

            <table style={{border:'1px solid black'}}>
                <tr style={{border:'1px solid black'}}>
                    <th style={{border:'1px solid black'}}>Title</th>
                    <th style={{border:'1px solid black'}}>Artist</th>
                    <th style={{border:'1px solid black'}}>Album</th>
                    <th style={{border:'1px solid black'}}>Genre</th>
                    <th style={{border:'1px solid black'}}>Release Date</th>
                    <th style={{border:'1px solid black'}}>Delete</th>
                </tr>

                {props.songs.map((songs) => (
                    <tr style={{border:'1px solid black'}}>
                        <td style={{border:'1px solid black'}}>{songs.title}</td>
                        <td style={{border:'1px solid black'}}>{songs.artist}</td>
                        <td style={{border:'1px solid black'}}>{songs.album}</td>
                        <td style={{border:'1px solid black'}}>{songs.genre}</td>
                        <td style={{border:'1px solid black'}}>{songs.release_date}</td>
                        <button onClick={() => deleteSong(songs.id)}>Delete Song</button>
                    </tr>
                ))}
            </table>
            
            <br /><br />

                
        </div>
        )
}
export default SongTable