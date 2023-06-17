import MovieCard from './MovieCard';
import Navbar from './Navbar';
import {data} from '../data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {data.map((movie) => 
            <MovieCard movie={movie} key={data.indexOf(movie)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
