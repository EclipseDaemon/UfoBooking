import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./Pages/BookingPage";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import { SiteHeader } from "./Components/SiteHeader";
import { SiteFooter } from "./Components/SiteFooter";

function App() {
  return (
    <>
      <Router>
        <SiteHeader />
        <Routes>
          <Route path="/booked" element={<BookingPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <SiteFooter />
      </Router>
    </>
  );
}

export default App;
