import './App.css'
import { Routes, Route } from "react-router-dom";
import Page_Suggestions from "./components/Page_Suggestions.jsx";
import Page_Login from "./components/Page_Login.jsx";
import Page_Signup from "./components/Page_Signup.jsx";
import Page_Gallery from "./components/Page_Gallery.jsx";
import Page_Labels from "./components/Page_Labels.jsx";
import Page_Categories from "./components/Page_Categories.jsx";

function App() {

  return (

      <Routes>
        <Route path="/suggestions" element={<Page_Suggestions />} />
        <Route path="/" element={<Page_Login />} />
        <Route path="/login" element={<Page_Login />} />
        <Route path="/signup" element={<Page_Signup />} />
        <Route path="/gallery" element={<Page_Gallery />} />
        <Route path="/labels" element={<Page_Labels />} />
        <Route path="/categories" element={<Page_Categories />} />
      </Routes>

    

  )
}

export default App
