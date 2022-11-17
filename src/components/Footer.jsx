import styled from "@emotion/styled";
import React from "react";

function Footer() {
	return (
		<>
			<FooterWrapper>
				<FooterContainer>
					<Column type="logo">Logo</Column>
					<Column>
						<div style={{ fontWeight: "700", fontSize: "16px" }}>
							Acerca del INEGI{" "}
						</div>
						<PTag>Quiénes somos</PTag>
						<PTag>Marco normativo</PTag>
						<PTag>Transparencia</PTag>
						<PTag>Desarrolladores</PTag>
						<PTag>Oportunidades de trabajo</PTag>
						<PTag>Eventos</PTag>
						<PTag>Véndale al INEGI</PTag>
						<PTag>Armonización contable</PTag>
						<PTag>Sistema de Manejo Ambiental</PTag>
					</Column>
					<Column>
						<div style={{ fontWeight: "700", fontSize: "16px" }}>Contacto </div>
						<PTag>800 111 46 34</PTag>
						<PTag>Chat</PTag>
						<PTag>atencion.usuarios@inegi.org.mx</PTag>
						<PTag>Directorio</PTag>
						<PTag>Solicitud de información</PTag>
					</Column>
					<Column>
						<div style={{ fontWeight: "700", fontSize: "16px" }}>
							Sitios de interés{" "}
						</div>
						<PTag>SNIEG</PTag>
						<PTag>Catálogo Nacional de Indicadores</PTag>
						<PTag>Cuéntame de México</PTag>
						<PTag>Objetivos de Desarrollo Sostenible</PTag>
						<PTag>Órgano Interno de Control</PTag>
						<PTag>Denuncias</PTag>
						<PTag>Enlaces de interés</PTag>
					</Column>
				</FooterContainer>
			</FooterWrapper>
			<CopyRight>
				Mapa del sitio | Términos de uso | Accesibilidad <br />
				Derechos reservados © INEGI
			</CopyRight>
		</>
	);
}

export default Footer;

const FooterWrapper = styled.div`
	background-color: #3273c3;
`;
const FooterContainer = styled.div`
	height: 260px;
	display: flex;
	flex-direction: row;
	margin: auto;
	max-width: 1200px;
	padding: 10px;
	justify-content: space-between;
`;

const Column = styled.div`
	color: white;
	width: 33%;
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	justify-content: ${(props) => props.type === "logo" ? "center" : "start"} ;
`;

const PTag = styled.div`
	color: white;
	padding: 4px 0;
	font-size: 14px;
`;

const CopyRight = styled.div`
	color: white;
	display: flex;
	height: 70px;
	font-size: 14px;
	background-color: #575756;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
