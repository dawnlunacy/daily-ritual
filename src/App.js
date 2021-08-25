import logo from './logo.svg';
import './App.css';
import {Header} from './containers/Header/Header';
import { DailyRune} from './containers/DailyRune/DailyRune';

function App() {
  return (
    <div className="App">
      <Header/>
      <DailyRune />
    </div>
  );
}

export default App;
