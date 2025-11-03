import { NavLink, Link } from "react-router-dom"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { keyframes } from "styled-components"

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

const BotonVolver = styled(Link)`
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  transition: all 0.3s ease;
  text-align: center;
  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.body};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  @media (max-width: 799px) {
    margin: 0.8rem auto;
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 399px) {
    margin: 0.6rem auto;
    padding: 0.3rem 0.6rem;
  }
`;

export const Nosotros = () => {
    const images = ["/imagenes/licha.png", "/imagenes/lu.png", "/imagenes/mila.png", "/imagenes/pablo.png", "/imagenes/tincho.png"]

    return (
        <ContenedorNosotros>
            <h1>Nosotros</h1>
            <Carrusel>
                <CarruselInner>
                    {images.concat(images).map((img, index) => (
                        <Imagen key={index} src={img} alt={`Miembro ${(index % images.length) + 1}`} />
                    ))}
                </CarruselInner>
            </Carrusel>
            <Lista>
                <li><NavLink to="/licha">🎨 Licha</NavLink></li>
                <li><NavLink to="/lu">🎨 Lu</NavLink></li>
                <li><NavLink to="/mila">🎨 Mila</NavLink></li>
                <li><NavLink to="/pablo">🎨 Pablo</NavLink></li>
                <li><NavLink to="/tincho">🎨 Tincho</NavLink></li>
            </Lista>
            <BotonVolver to="/">⬅️ Volver al Inicio</BotonVolver>
        </ContenedorNosotros>
    )
}

const ContenedorNosotros = styled.div`
    text-align: center;
    padding: 2rem;
    background-color: ${({ theme }) => theme.body};
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    color: ${({ theme }) => theme.fontColor};
    border: 1px solid ${({ theme }) => theme.border};

    @media (max-width: 799px) {
        padding: 1.5rem;
    }

    @media (max-width: 399px) {
        padding: 1rem;
    }
`;

const Carrusel = styled.div`
    overflow: hidden;
    margin: 2rem 0;
    position: relative;
`

const CarruselInner = styled.div`
    display: flex;
    animation: ${scroll} 20s linear infinite;
    gap: 2rem;
`

const Imagen = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 5px solid rgba(156, 152, 115, 1);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    flex-shrink: 0;

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`

const Lista = styled.ul`
    list-style: none;
    padding: 0;
    margin: 2rem 0 0 0;

    li {
        margin: 1rem 0;
    }

    a {
        color: ${({ theme }) => theme.fontColor};
        text-decoration: none;
        font-size: 1.2rem;
        transition: color 0.3s ease;

        &:hover {
            color: ${({ theme }) => theme.accent};
        }
    }

    @media (max-width: 799px) {
        li {
            margin: 0.8rem 0;
        }

        a {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 399px) {
        li {
            margin: 0.6rem 0;
        }

        a {
            font-size: 1rem;
        }
    }
`;