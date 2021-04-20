import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Routes from './routes/routes';
import {AppContainer} from './style/style'

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
