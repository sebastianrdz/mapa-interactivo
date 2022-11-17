import styled from "@emotion/styled";

function Navbar() {
	return (
		<>
			<NavHeader>
				<NavHeaderLimit>Logo</NavHeaderLimit>
			</NavHeader>
			<NavLinks>
				<NavLinksLimit>Links</NavLinksLimit>
			</NavLinks>
		</>
	);
}

export default Navbar;

const NavHeader = styled.div`
	background-color: #fff;
`;
const NavHeaderLimit = styled.div`
	height: 80px;
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
	height: 30px;
	display: flex;
	margin: auto;
	max-width: 1200px;
	padding: 10px;
	font-size: 11px;
`;
