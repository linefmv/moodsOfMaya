import './App.css';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1> Maya the dog 🐶</h1>
        <p className="description"> She is the best partner in the word,
           and we are best friends. </p>
        </div>
      <Card/>
      </header>
    </div>
  );
}

export default App;
