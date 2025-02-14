import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coverpage from "./components/Coverpage"
import Header from "./components/Header"
import AboutMe from "./components/pages/AboutMe";
import WorkSamples from "./components/pages/WorkSamples";
import Contacts from "./components/pages/Contacts";
import Footer from "./components/pages/Footer";

function App() {


  return (
  
    
      <Router>
      <Header />
      
      
      <Routes>
        <Route path="/" element={
          <>
          <Coverpage />
          </>
        } />
        {/* <Route path="/coverpage" Component={Coverpage} /> */}
        <Route path="/aboutme" Component={AboutMe} />
        <Route path="/worksamples" Component={WorkSamples} />
        <Route path="/contacts" Component={Contacts} />
      </Routes>
      <Footer />
      </Router>
      
    
  )
}

export default App


