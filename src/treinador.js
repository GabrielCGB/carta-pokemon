import React, { Link } from "react-router-dom";
import './treinador.css';

function Trainer(){
    return(
        <div className="paginaTreinador">
            <div className="titulo">
                <h1>Treinador</h1>
                    <div className="imagemTreinador">
                        <img src="ashCation.png" alt="treinador"/>

        <div className="Informacoes">
            <p>Treinador: Ash Cation </p>
            <p>Nome completo: Gabriel do Carmo Guilger Branco</p>
            <p>Idade: 100</p>
            <p>Nickname: Gabriel_CGB</p>
            <p>Quantidade de Pokémons: 1</p>
            <p>Quantidades de badges: 0</p>
        </div>

        <div className="botoes">
            <Link to="/pokemon1">
            
                    <img src="pokebola.png" alt="Pokebola1"></img>
            
            </Link>

            <Link to="/pokemon2">
            
                    <img src="pokebola.png" alt="Pokebola2"></img>
            
            </Link>

            <Link to="/pokemon3">
            
                    <img src="pokebola.png" alt="Pokebola3"></img>
            
            </Link>
        </div>
        </div>
    </div>
    </div>
    );

}

export default Trainer;