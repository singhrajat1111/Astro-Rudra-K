import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Transit from "./pages/TransitPage";
import Dasha from "./pages/Dasha";
import Panchang from "./pages/Panchang";
import HoroscopePage from "./pages/HoroscopePage";
import MatchingPage from "./pages/MatchingPage";
import KundliPage from "./pages/KundliPage";


export default function App() {
    return (
        <Router>
            <Routes>
                {/* Main Home Page */}
                <Route path="/" element={<KundliPage />} />
                {/* Individual Astro Tools */}
                <Route path="/kundli" element={<KundliPage />} />
                <Route path="/matching" element={<MatchingPage />} />
                <Route path="/transit" element={<Transit />} />
                <Route path="/dasha" element={<Dasha />} />
                <Route path="/panchang" element={<Panchang />} />
                <Route path="/horoscope" element={<HoroscopePage />} />
                {/* <Route path="/test-kundli" element={<TestKundliPage />} /> */}
            </Routes>
        </Router>
    );
}
