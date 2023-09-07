import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const MainRouter = () =>{

    return(
        <Router>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<Home />} />
                <Route path="/item/:itemId" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default MainRouter;