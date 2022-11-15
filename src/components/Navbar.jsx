import styled from '@emotion/styled'
import HeaderImg from '../img/Header.png';

function Navbar() {
  return (
    <NavContainer>
      {/* <NavHeader></NavHeader>
      <NavLinks>
        <a>Temas</a>
        <a>Programas de informacion</a>
        <a>Sistemas de Consulta</a>
        <a>Infrastructura</a>
        <a>Investigacion</a>
        <a>Sala de Prensa</a>
        <a>Chat bot</a>
      </NavLinks> */}
      <NavImg src={HeaderImg}/>
    </NavContainer>
  )
}

export default Navbar


const NavContainer = styled.div`
  /* background-color: #575756;
  color: #fff;
  padding: 0 200px; */
`;

const NavImg = styled.img`
  max-width: 100%;
`;

const NavHeader = styled.div`
  
`;

const NavLinks = styled.div`
  
`;