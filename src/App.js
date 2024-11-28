
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <div>
      
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
