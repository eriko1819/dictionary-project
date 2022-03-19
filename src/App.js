import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Eriko and is open-sourced on 
            <a href="https://github.com/eriko1819/dictionary-project"
             taret="_blank" rel="noreferrer">
            Github
            </a> and hosted on 
            <a href="https://vigilant-agnesi-002a1e.netlify.app/"
             target="_blank" rel="noreferr">
            Netlify </a>
          </small>
        </footer>
      </div>
    </div>
  );
}


