import { useState } from 'react';
import './global.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import RoutesApp from './Routes/Routes';

function App() {
  const [darkThem, setDarkThem] = useState(false);

  return (
    <div className={darkThem?"dark":""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen ">
        <Navbar darkThem={darkThem} setDarkThem={setDarkThem}/>
        <RoutesApp/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
