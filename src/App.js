import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './styles/App.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Bem-vindo ao mundo dos retrogames!'} />
    </div>
  );
}

export default App;
