import "./App.css";
import { useState } from "react";
function App() {
  const [keyword, setKeyword] = useState('');
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    let data = await fetch(`https://v1.nocodeapi.com/ashutosh1/spotify/DREKatzrHUUyqqpy/search?q=${keyword}&type=track`);
    let convertedData = await data.json();
    console.log(convertedData);
    setTracks(convertedData.tracks.items);
  }

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">My Search</a>
          <form className="d-flex" role="search">
            <input
              value={keyword}
              onChange={event => setKeyword(event.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            
            <button onClick={getTracks} className="btn btn-outline-success" type="button">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="col">
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6"></div>
          {tracks.map((element) => (
            <div key={element.id} className="col-lg-3 col-md-6">
              <div className="card">
                <img src={element.album.images[0].url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{element.name}</h5>
                  <p className="card-text">
                    Artist: {element.album.artists[0].name}
                  </p>
                  <p className="card-text">
                    Released_date: {element.album.release_date}
                  </p>
                  <p>
                    Type: {element.album.type}
                  </p>
                  <audio controls src={element.preview_url}></audio>
                  
                  <a href="" className="btn btn-primary">
                    Enjoy The Music..........
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3>@Copyright Reserved by AshutoshDixit</h3>
    </>
  );
}

export default App;
