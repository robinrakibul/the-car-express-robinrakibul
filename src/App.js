import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarShop from './components/CarShop/CarShop';
import QA from './components/QA/QA';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CarShop></CarShop>
      <QA></QA>
    </div>
  );
}

export default App;
