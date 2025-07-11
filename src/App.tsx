import { Toolbar } from '@mui/material';
import './App.css'
import MuiCard from "./components/MuiCard";
import MuiNavbar from './components/MuiNavbar';

function App() {
  return (
    <div className="App">
      <MuiNavbar/>
      <Toolbar/>
      <MuiCard />
    </div>
  );
}

export default App;
