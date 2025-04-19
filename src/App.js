import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroBanner from './Components/HeroBanner';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import PropertyContent from './Components/PropertyContent';
import ProjectHighlights from './Components/ProjectHighlights';
import Footer from './Components/Footer';
import PrivacyPolicy from './Components/PrivacyPolicyPopup';
import { useEffect } from "react";


function App() {
    useEffect(() => {
        if (window.location.hash) {
          // Remove the hash from the URL
          window.history.replaceState(null, "", window.location.pathname);
          // Scroll to top
          window.scrollTo(0, 0);
        }
      }, []);
    return (
        <Router>
            <div className="bella-casa-template">
                <Routes>
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/" element={
                        <>
                            <Navbar />
                            <HeroBanner />
                            <Body />
                            <PropertyContent />
                            <ProjectHighlights />
                            <Footer />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;