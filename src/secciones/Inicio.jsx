import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Inicio = () => {
    return (
        <ContenedorInicio>
            <h1 id="grupazo">¡Hola, mundo! Somos el Grupazo 💪</h1>
            <p>Esta es la app del grupo 10. Nos conocimos desde los comienzos de la tecnicatura, y desde entonces formamos un equipo inseparable. Creemos que el trabajo en equipo es la clave para lograr llevar adelante un proyecto copado, y trabajamos entre todos para generar siempre entregas superadoras.
(Dice Mila: "también nos copiamos... no en esta materia, obvio ...no lean eso...")</p>
            <p>El equipo está conformado por:</p>
            <ListaIntegrantes>
                <li><NavLink to="/licha">Licha</NavLink></li>
                <li><NavLink to="/lu">Lu</NavLink></li>
                <li><NavLink to="/mila">Mila</NavLink></li>
                <li><NavLink to="/pablo">Pabli</NavLink></li>
                <li><NavLink to="/tincho">Tincho</NavLink></li>
            </ListaIntegrantes>
            <p>¡Esperamos que les guste nuestra app!</p>
        </ContenedorInicio>
    )
}

const ContenedorInicio = styled.div`
    background-color: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    color: ${({ theme }) => theme.fontColor};
    text-align: center;

    h1 {
        color: ${({ theme }) => theme.accent};
        margin-bottom: 1.5rem;
        font-size: 2rem;
    }

    p {
        line-height: 1.6;
        margin-bottom: 1rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 799px) {
        padding: 1.5rem;
        h1 {
            font-size: 1.8rem;
        }
        p {
            font-size: 0.95rem;
        }
    }

    @media (max-width: 399px) {
        padding: 1rem;
        h1 {
            font-size: 1.5rem;
        }
        p {
            font-size: 0.9rem;
        }
    }
`;

const ListaIntegrantes = styled.ul`
    list-style: none;
    padding: 0;
    margin: 1rem auto;
    max-width: 400px;

    li {
        margin: 0.5rem 0;
        display: inline-block;
        margin: 0.5rem 1rem;
    }

    a {
        color: ${({ theme }) => theme.fontColor};
        text-decoration: none;
        font-size: 1.1rem;
        transition: color 0.3s ease;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        border: 1px solid ${({ theme }) => theme.border};

        &:hover {
            color: ${({ theme }) => theme.body};
            background-color: ${({ theme }) => theme.accent};
        }
    }

    @media (max-width: 799px) {
        li {
            margin: 0.4rem 0.5rem;
        }

        a {
            font-size: 1rem;
            padding: 0.4rem 0.8rem;
        }
    }

    @media (max-width: 399px) {
        li {
            margin: 0.3rem 0.3rem;
        }

        a {
            font-size: 0.9rem;
            padding: 0.3rem 0.6rem;
        }
    }
`;