import styled from "@emotion/styled";
import React from "react";

function Footer() {
	return (
    <>
		<FooterWrapper>
			<FooterContainer>Footer</FooterContainer>
		</FooterWrapper>
    <CopyRight/>
    </>
	);
}

export default Footer;

const FooterWrapper = styled.div`
	background-color: #3273C3;
`;
const FooterContainer = styled.div`
	height: 300px;
	display: flex;
	margin: auto;
	max-width: 1200px;
	padding: 10px;
	font-size: 11px;
`;
const CopyRight = styled.div`
	height: 33px;
	background-color: #575756;
`;
