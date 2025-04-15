
import './App.css';
import MainComponent from './components/MainComponent';
import MediaQuery from 'react-responsive'

function App() {
  return (
    <div className="App">
      <MediaQuery minWidth={200}>
        <MainComponent />
      </MediaQuery>
      
    </div>
  );
}

export default App;
