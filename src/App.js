import React from 'react';
import Header from './components/Header';
// import Landing from './components/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import DashboardForm from './components/DashboardForm';
import MoreForm from './components/MoreForm';
import MoreAdd from './components/MoreAdd';
import Explore from './components/Explore';
import Add from './components/Add';
import Chat from './components/Chat';
import Admin from './components/Admin';
import MorePhoto from './components/MorePhoto';
import MoreAdmin from './components/MoreAdmin';
import Favorite from './components/Favorite';
import Jadwal from "./components/Jadwal";
import Trending from './components/Trending';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Booking from './components/Booking';
import Struk from './components/Struk';
import Soon from './components/Soon';
// import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Landing/>}/> */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Dashboard" element={<DashboardForm />} />
        <Route path="/more" element={<MoreForm/>}/>
        <Route path="/moreAdd" element={<MoreAdd/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/morePhotographer" element={<MorePhoto/>}/>
        <Route path="/moreAdmin" element={<MoreAdmin/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/jadwal" element={<Jadwal/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/struk' element={<Struk/>}/>
        <Route path='/soon' element={<Soon/>}/>
      </Routes>
      
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
