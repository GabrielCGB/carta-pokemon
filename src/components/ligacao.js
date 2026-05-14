import React from "react";
import { Link } from "react-router-dom";
import pokebola from '../assets/pokebola.png';

export function Ligacoes(){

    return(

        <div className="botoes">

            <Link to="/pokemon1">
                <img src={pokebola} alt="Pokebola1"/>
            </Link>

            <Link to="/pokemon2">
                <img src={pokebola} alt="Pokebola2"/>
            </Link>

            <Link to="/pokemon3">
                <img src={pokebola} alt="Pokebola3"/>
            </Link>

        </div>
    );
}