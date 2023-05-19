import "./App.css";
import {Routes, Route} from "react-router-dom"
import MockAPI from "./Mockman";
import {Navbar} from "./Components/Navbar"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/mockApi" element={<MockAPI/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
