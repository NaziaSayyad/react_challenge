import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
