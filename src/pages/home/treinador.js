import React from "react";
import treinador from '../../assets/ashCation.png';
import { Ligacoes } from '../../components/ligacao';
import './treinador.css';

function Trainer(){

    return(
        <div className="paginaTreinador">

            <div className="titulo">
        
                <h1>Treinador</h1>

                <Ligacoes />

                    <div className="imagemTreinador">
                        <img src={treinador} alt="treinador"/>

        <div className="Informacoes">
        
            <p>Treinador: Ash Cation </p>
            <p>Nome completo: Gabriel do Carmo Guilger Branco</p>
            <p>Idade: 18</p>
            <p>Nickname: Gabriel_CGB</p>
            <p>Quantidade de Pokémons: 4</p>
            <p>Quantidades de badges: 0</p>


                        </div>

                    </div>

                </div>

        </div>

    );

}

export default Trainer;