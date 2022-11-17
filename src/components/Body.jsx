import styled from "@emotion/styled";
import { ChatBot, InteractiveMap } from "../components";

function Body() {
	return (
		<BodyWrapper>
			<BackLinkRoute>
				<span style={{ color: "blue" }}>Inicio </span> / Chat Bot
			</BackLinkRoute>
			<BodyContent>
				<FlexRow>
					<InteractiveMap />
					<ChatBot />
				</FlexRow>
			</BodyContent>
		</BodyWrapper>
	);
}

export default Body;

const BodyWrapper = styled.div`
	background-color: #EDEDED;
	padding: 5px 20px 20px;
`;

const BackLinkRoute = styled.p`
	display: flex;
	margin: auto;
	max-width: 1200px;
	padding: 10px;
	font-size: 11px;
`;

const BodyContent = styled.div`
	margin: auto;
	max-width: 1200px;
	background-color: #fff;
	padding: 10px;
  min-height: 400px;
`;

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
  justify-content: space-between;
`;
