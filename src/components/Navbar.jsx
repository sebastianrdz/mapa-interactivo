import styled from "@emotion/styled";
import { Logo } from "../img";

function Navbar() {
	return (
		<>
			<NavHeader>
				<NavHeaderLimit>
					<img alt="logo" src={Logo} />
				</NavHeaderLimit>
			</NavHeader>
			<NavLinks>
				<NavLinksLimit>
					<NavLink>Temas</NavLink>
					<NavLink>Programas de información</NavLink>
					<NavLink>Sistemas de Consulta</NavLink>
					<NavLink>Infraestructura</NavLink>
					<NavLink>Investigación</NavLink>
					<NavLink>Sala de prensa</NavLink>
					<NavLink>Chat Bot</NavLink>
				</NavLinksLimit>
			</NavLinks>
		</>
	);
}

export default Navbar;

const NavHeader = styled.div`
	background-color: #fff;
`;
const NavHeaderLimit = styled.div`
	height: 44px;
	display: flex;
	margin: auto;
	max-width: 1200px;
	padding: 10px;
	font-size: 11px;
`;

const NavLinks = styled.div`
	background-color: #575756;
`;
const NavLinksLimit = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 18px;
	display: flex;
	margin: auto;
	max-width: 1200px;
	padding: 10px;
	font-size: 11px;
`;

const NavLink = styled.div`
	font-size: 14px;
	font-weight: 600;
	width: fit-content;
	padding: 10px 12px;
	color: white;
	cursor: pointer;
	:hover {
		background-color: #38a1f2;
	}
`;
