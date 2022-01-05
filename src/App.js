import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Tags from './Pages/Tags';
import Register from './Pages/Register';
import Notes from './Pages/Notes';
import CreateNote from './Pages/CreateNote';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/tags' element={<Tags/>}/>
          <Route path='/notes' element={<Notes/>}/>
          <Route path='/create_note' element={<CreateNote/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
