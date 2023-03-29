import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { Box } from '@chakra-ui/react';

function App() {
  const Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg23bqTJ8NSFQ6vjY81zv-2Av8fZY6Zls9gg&usqp=CAU"

  return (
    <div className="wrapper">
      <Navbar
        image={Image}
      />
      <Sidebar />
    </div>
  );
}

export default App;
