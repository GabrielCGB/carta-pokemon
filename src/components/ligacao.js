import React from "react";
import { Link } from "react-router-dom";
import pokebola from '../assets/pokebola.png';

export function Ligacoes(){

    return(

        <div className="botoes">

            <Link to="/pokemon/cyndaquil">
                <img src={pokebola} alt="Pokebola1"/>
            </Link>

            <Link to="/pokemon/turtwig">
                <img src={pokebola} alt="Pokebola2"/>
            </Link>

            <Link to="/pokemon/cubone">
                <img src={pokebola} alt="Pokebola3"/>
            </Link>
            
            <Link to="/pokemon/sableye">
                <img src={pokebola} alt="Pokebola4"/>
            </Link>
            
            <Link to="/pokemon/sableye">
                <img src={pokebola} alt="Pokebola4"/>
            </Link>

        </div>
    );
}