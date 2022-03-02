import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/:id" exact element={<Detail />}></Route>
                <Route path="/" exact element={<Home />}></Route>
            </Routes>
        </Router>
    );
}

export default App;