import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Aboute from './Pages/Aboute';
import Contact from './Pages/Contact';
import Header from './component/Header';

function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboute" element={<Aboute />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        {/* <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
