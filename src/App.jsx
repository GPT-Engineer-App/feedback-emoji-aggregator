import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateDemo from "./pages/CreateDemo.jsx";
import ViewDemo from "./pages/ViewDemo.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/create" element={<CreateDemo />} />
        <Route exact path="/view" element={<ViewDemo />} />
      </Routes>
    </Router>
  );
}

export default App;