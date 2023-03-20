import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import JavaIntroduction from "./components/Java/JavaIntroduction";
import JavascriptIntroduction from "./components/Javascript/JavascriptIntroduction";
import PythonGettingStarted from "./components/Python/PythonGettingStarted/PythonGettingStarted";
import PythonIntroduction from "./components/Python/PythonIntroduction/PythonIntroduction";
import PythonVariables from "./components/Python/PythonVariables/PythonVariables";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/java-intro" Component={JavaIntroduction} />
            <Route exact path="/js-intro" Component={JavascriptIntroduction} />
            <Route exact path="/python-getstarted" Component={PythonGettingStarted} />
            <Route exact path="/python-intro" Component={PythonIntroduction} />
            <Route exact path="/python-variables" Component={PythonVariables} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
