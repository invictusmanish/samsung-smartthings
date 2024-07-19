import './App.css';
import Header from './components/Layout/Header';
import AppRouter from './router/router';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <AppRouter />
      </>
    </div>
  );
}

export default App;
