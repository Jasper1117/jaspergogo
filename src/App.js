import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import Home from "./Pages";
import Contact from "./Pages/Contact";


function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>

  );
}

export default App;
