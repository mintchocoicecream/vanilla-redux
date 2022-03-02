import React from "react";
import { BrowserRouter, HashRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/:id" exact element={<Detail />}></Route>
                <Route path="/" exact element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;