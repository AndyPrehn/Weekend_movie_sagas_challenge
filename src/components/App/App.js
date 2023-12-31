import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>The Movies Saga!</h1>
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        <Route exact path="/detail/:movieId">  
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
