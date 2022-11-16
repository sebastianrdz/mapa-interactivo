import { useState } from "react";
import { dispatchIntention } from "../api/intentionApi";
import styled from "@emotion/styled";

function ChatBot() {
	const [inputText, setInputText] = useState("");
	// const [response, setResponse] = useState({});

	return (
		<ChatBotWrapper>
			<ChatHeader> Busqueda </ChatHeader>
			<ChatHistory></ChatHistory>
			<ChatInputWrapper>
				<ChatInputBox placeholder="text..." onChange={(e) => {setInputText(e.target.value)}}/>
				<ChatButton onClick={dispatchIntention(inputText)}>
					<SendIcon />
				</ChatButton>
			</ChatInputWrapper>
		</ChatBotWrapper>
	);
}

export default ChatBot;

const ChatBotWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-left: 10px;
	max-width: 400px;
	/* border: 1px solid red; */
`;

const ChatHeader = styled.div`
	height: 40px;
	/* border: 1px solid green; */
	font-size: 26px;
	font-weight: 700;
`

const ChatHistory = styled.div`
	height: 100%;
	border: 1px dashed black;
`

const ChatInputWrapper = styled.div`
	display: flex;
	margin-top: auto;
`;

const ChatInputBox = styled.input`
	border-radius: 20px;
	border: 1px solid #2f97ff;
	margin: 1px;
	padding: 6px 12px;
	outline: none;
	width: 100%;
	:hover, :focus {
		border: 2px solid #2f97ff;
		margin: 0px;
	}
`;

const ChatButton = styled.button`
	border-radius: 999px;
	border: none;
	background-color: #2f97ff;
	color: #fff;
	padding: 8px;
	margin-left: 8px;
	cursor: pointer;
	:hover {
		background-color: #2784e0;
	}
`;

const SendIcon = styled.div`
	border: 1px solid black;
	width: 20px;
	height: 20px;
`;
