import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Tags from './Pages/Tags';
import Register from './Pages/Register';
import Notes from './Pages/Notes';
import CreateNote from './Pages/CreateNote';
import SingleNote from './Pages/SingleNote';
import Home from './Pages/Home';
import React from 'react'
import {Auth,fetchToken,signIn,signOut,isAuthenticated,fetchUser} from './Components/Auth'


function App() {
  return (
    <div className='App'>
    <Auth.Provider value={{fetchToken,signIn,signOut,isAuthenticated,fetchUser}}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/tags' element={<Tags/>}/>
          <Route path='/notes' element={<Notes/>}/>
          <Route path='/create_note' element={<CreateNote/>}/>
          <Route path='/note/:id' element={<SingleNote/>}/>
        </Routes>
      </Router>
    </Auth.Provider>
    </div>
  );
}

export default App;
