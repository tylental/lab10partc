import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to t3diep's Lab 10 Part C! Using ReactJS Framework
        </p>
    <p class="subtext">I installed this framework through the NodeJs website and following the page tutorial. 
    I also had to download Git, so that I can upload this page to Github, and host it.</p>
    <p class="subtext">Challenging Part: Following the tutorial to deploy this project to Github, since I had to use Git, which I have never used before. I was
    having trouble understanding what each command did, but I was able to understand it through running them a bunch of times. The prompts from the command
    were self explanatory. The most interesting part was to see how much Github provides and I believe I will be using this application more often in the future.</p>
      </header>
    </div>
  );
}

export default App;
