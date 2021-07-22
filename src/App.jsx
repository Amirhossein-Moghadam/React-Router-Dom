import { Link } from "react-router-dom";
import "./App.css";
import pathes from "./router/pathes";
import RouterHandler from "./router/components/routerHandler";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to={pathes.PROFILE}>Profile</Link>
        <Link to={pathes.ABOUT}>About</Link>
        <Link to={pathes.REGISTER}>Register</Link>
        <Link to={pathes.DASHBOARD}>Dashboard</Link>
        <RouterHandler />
      </header>
    </div>
  );
}

export default App;
