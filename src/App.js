import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {orginals,Actions} from './urls'
// import { act } from "react-dom/test-utils";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={Actions} title='Actions' isSmall/>
    </div>
  );
}

export default App;  
