import React from "react";
import{ Route,BrowserRouter, Routes } from "react-router-dom";
import Pokecard from "./card";
import Trainer from "./treinador";


function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Trainer/>}/>
            <Route path="/pokemon1"element={<Pokecard/>}/>
        </Routes>
        </BrowserRouter>
    )
};
export default App;