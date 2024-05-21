import './App.css';
import { Routes, Route } from "react-router-dom";
import Exchanges from './Components/Exchanges';
import CoinDetails  from './Components/CoinDetails';
import Coins from './Components/Coins';
import OurModel from './Components/OurModel';


function App() {
  return (
    <>
     
   

    <Routes>
      <Route path='/' element={<Exchanges />} />
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coins/:id' element={<CoinDetails/>} />
    </Routes>
 </>
  );
}

export default App;
