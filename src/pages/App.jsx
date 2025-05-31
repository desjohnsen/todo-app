import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "../components/List"; 
import About from "./About"; 
import Nav from "../components/Nav"; 

const App = () => {
  return (
    <Router>
      <div className="content">
        <Nav /> {}
        <main>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
