import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarShop from './components/CarShop/CarShop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CarShop></CarShop>
    </div>
  );
}

export default App;
