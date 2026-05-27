import React from "react";
import{ Route,BrowserRouter, Routes } from "react-router-dom";
import Trainer from "./pages/home/treinador";
import Pokecard from "./pages/pokemon/card";


function App(){

    return(

        <BrowserRouter>

        <Routes>

            <Route path="/" element={<Trainer/>}/>

            <Route path="/pokemon/:id"element={<Pokecard/>}/>

        </Routes>

        </BrowserRouter>

    )

};

export default App;