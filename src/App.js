import './App.css';

import Routes from './pages/Routes'
import { ImageProvider } from '../src/context'
import Globals from '../src/globals/Globals'

function App() {
  return (
    <div className="App">
      <Globals>
        <ImageProvider>
          <Routes />
        </ImageProvider>
      </Globals>
    </div>
  );
}

export default App;
