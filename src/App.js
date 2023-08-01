import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import "./index.css"
import NavBar from './component/header';
import SignUp from './pages/SignUp';
import SignIn from './pages/signIn';
import Faq from './pages/faq';
import ForgotPassword from './pages/forgotPassword';
import Contact from './pages/contact';
import Profile from './pages/Profile';
import Home from './pages/home';
import Footer from './component/footer';
import PrivateRoute from './component/PrivateRoute';

function App() {
  return (
    <>
     <Router>
      <NavBar/>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
      <Footer />
     </Router>
    </>
  );
}

export default App;
