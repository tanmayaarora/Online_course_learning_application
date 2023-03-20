import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import JavaIntroduction from "./components/Java/JavaIntroduction";
import JavascriptIntroduction from "./components/Javascript/JavascriptIntroduction";
import PythonIntroduction from "./components/Python/PythonIntroduction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/java-intro" Component={JavaIntroduction} />
            <Route exact path="/js-intro" Component={JavascriptIntroduction} />
            <Route exact path="/python-intro" Component={PythonIntroduction} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
