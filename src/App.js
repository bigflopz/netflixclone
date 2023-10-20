import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import requests from './Request';

function App() {
  return (
    <div className='page'>
    <div className="App">
      <Header/>
      <body>
        <div className='body'>
          <Movie title="Trending Now" fetchUrl={requests.requestTrending}/>
          <Movie title="Popular" fetchUrl={requests.requestPopular}/>
          <Movie title="Top Rated" fetchUrl={requests.requestTopRated}/>
        </div>
      </body>
    </div>
    </div>
  );
}

export default App;
