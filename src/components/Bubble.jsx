import styled from "@emotion/styled";

const Bubble = (props) => {
	return (
		<BubbleRow>
			<BubbleContent client={props.client}>{props.children}</BubbleContent>
		</BubbleRow>
	);
};

export default Bubble;

const BubbleRow = styled.div`
  display: flex;
	margin: 8px 0;
`;
const BubbleContent = styled.div`
  color: white;
  border-radius: ${props => props.client === "bot" ? "20px 20px 20px 0" : "20px 20px 0 20px"};
	padding: 8px 12px;
	width: fit-content;
	background-color: #38a1f2;
  margin-left: ${props => props.client === "bot" ? "" : "auto"};
`;
