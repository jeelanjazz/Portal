import Home from "../src/pages/Home";
import CheckIn from "./pages/CheckIn";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import { Route, Routes,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Home/>
     <BrowserRouter>
      <Routes>
        <Route path="/checkin" element ={<CheckIn/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/details" element={<Details/>}/>
         
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
