// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,  Route, Routes} from 'react-router-dom';
import Homepage from './components/Homepage';
import Description from './components/Description';
import Collaborators from './components/Collaborators';
// const ImageContext= createContext(null)



function App() {
    return(
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/description" element={<Description />} />
            <Route path="/collaborators" element={<Collaborators />} />
        </Routes>
		  </BrowserRouter>
    )
    
}

export default App;
