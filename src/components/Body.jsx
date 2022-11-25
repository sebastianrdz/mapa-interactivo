import styled from "@emotion/styled";
import { ChatBot, InteractiveMap } from "../components";
import { userCurrentLocation } from "../api/helperFunctions";
import { useState, useEffect } from "react";

const Body = () => {
	const [coordinates, setCoordinates] = useState({});
	const [userPosition, setUserPosition] = useState(null);

	useEffect(() => {
		userCurrentLocation(setUserPosition);
	}, []);

	if (userPosition == null) return <BodyWrapper>Loading...</BodyWrapper>;

	return (
		<BodyWrapper>
			<BackLinkRoute>
				<span style={{ color: "blue" }}>Inicio </span> / Chat Bot
			</BackLinkRoute>
			<BodyContent>
				<FlexRow>
					<InteractiveMap userPosition={userPosition} coordinates={coordinates} />
					<ChatBot userPosition={userPosition} setCoordinates={setCoordinates} />
				</FlexRow>
			</BodyContent>
		</BodyWrapper>
	);
}

export default Body;

const BodyWrapper = styled.div`
	background-color: #EDEDED;
	padding: 5px 20px 20px;
	min-height: 454px;
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
