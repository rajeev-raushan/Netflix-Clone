
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
       <Nav />
      {/* banner */}
      <Banner />


     <Row  title="Netflix Originals" IsLargeRow fetchUrl={requests.fetchNetflixOriginals}/>
     <Row  title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row  title="TopRated" fetchUrl={requests.fetchTopRated}/>
     <Row  title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row  title="Documantaries" fetchUrl={requests.fetchDocumantaries}/>
     <Row  title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row  title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
     

    </div>
  );
}

export default App;
