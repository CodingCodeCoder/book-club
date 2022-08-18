import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
