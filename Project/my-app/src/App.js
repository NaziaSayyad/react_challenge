import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { Box } from '@chakra-ui/react';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="wrapper">
      <Navbar/>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
