import Navbar from './components/navbar/navbar';
import Routes from './routes/routes';
import {AppContainer} from './style/style'

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Routes />
    </AppContainer>
  );
}

export default App;
