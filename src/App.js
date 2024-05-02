
import './App.css';
import Announcements from './components/annouscements/Announcements';
import Association from './components/association/Association';
import Coures from './components/courses/Coures';
import Dashbosrd from './components/dashboard/Dashbosrd';
import Job from './components/job/Job';
import Login from './components/login/Login';
import LoginPopUp from './components/loginPopup/LoginPopUp';
import SignUp from './components/signup/SignUp';
import NavigationBar from './components/navigatin-bar-section/NavigationBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {

  


  return (
    <Router>
      <div className="App">
        <div className='left_section'><NavigationBar/></div>
        <div className='right_section'> 
          <div>
            <Routes>
              <Route path='/dashboard' element={<Dashbosrd/>}></Route>
              <Route path='/courses' element={<Coures/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path='/jobs' element={<Job/>}></Route>
              <Route path='/loginPopup' element={<LoginPopUp/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path='/association' element={<Association/>}></Route>
              <Route path='/annouscements' element={<Announcements/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
