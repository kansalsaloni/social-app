import './Style/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
