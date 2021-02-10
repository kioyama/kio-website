import logo from './logo.svg';
import './App.css';
import PanelNavigation from './PanelNavigation';
import ItemDisplay from './ItemDisplay';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
    <header>
      <link rel="stylesheet" href="https://use.typekit.net/ekd2slo.css"></link>
    </header>
    <div className="app">      
      <Dashboard/>
    </div>
    <div className="blush-blush">
      <img src="blush.png"/>
    </div>
    </div>

  );
}

export default App;
