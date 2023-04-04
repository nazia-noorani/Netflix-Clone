import "./App.css";
import Rows from "./Rows";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>

      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Rows>
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending}></Rows>
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}></Rows>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}></Rows>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Rows>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Rows>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Rows>
    </div>
  );
}

export default App;
