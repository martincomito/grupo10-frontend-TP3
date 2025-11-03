import styled from 'styled-components'

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.fontColor};
  padding: 1rem 2rem;
  text-align: center;
  margin-top: auto;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.border};
  font-size: 0.9rem;

  @media (max-width: 799px) {
    padding: 0.8rem 1rem;
    font-size: 0.8rem;
  }

  @media (max-width: 399px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.7rem;
  }
`

export const Footer = () => {
    return (
        <FooterStyled>
            <p>© 2025 Grupazo. Todos los derechos reservados.</p>
        </FooterStyled>
    )
}