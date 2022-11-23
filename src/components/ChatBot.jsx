import { useEffect, useRef, useState } from "react";
import { dispatchIntention } from "../api/intentionApi";
import styled from "@emotion/styled";
import { Bubble } from "../components";
import { SendIcon } from "../img";

const ChatBot = ({userPosition}) => {
	const inputRef = useRef();

	const [inputText, setInputText] = useState("");
	const [response, setResponse] = useState({});
	const [history, setHistory] = useState([
		{
			message: "En que te puedo ayudar?",
			client: "bot",
		},
		{
			message: "Hola, soy Neuran tu asistente vitual!",
			client: "bot",
		},
	]);

	const _handleKeyDown = (e) => {
		if(e.key === 'Enter'){
			submitUserResponse();
		}
	}

	const submitUserResponse = () => {
		const tempData = {
			message: inputText,
			client: "user",
		};
		setHistory([tempData, ...history]);
		inputRef.current.value = "";
		setResponse(dispatchIntention(inputText, userPosition.latitude, userPosition.longitude));
	};

	const submitBotResponse = (text) => {
		const tempData = {
			message: text,
			client: "bot",
		};
		setHistory([tempData, ...history]);
	};

	useEffect(() => {
		switch (response.type) {
			case "ERROR": // ERROR
				submitBotResponse("Lo lamento, no te entendi.");
				break;
			case "SALUDO":
				submitBotResponse("Hola!");
				break;
			case "RADIO": // Busquda por radio
				submitBotResponse("Realizando busqueda por radio...");
				break;
			case "CANTIDAD": // Busqueda por cantidad
				submitBotResponse("Realizando busqueda por cantidad...");
				break;
			case "LUGAR": // Busqueda por lugar
				submitBotResponse("Realizando busqueda por lugar...");
				break;
			default: // Error
				console.warn("Default error");
		}
	}, [response]);

	return (
		<ChatBotWrapper>
			<ChatHeader> Busqueda </ChatHeader>
			<ChatHistory>
				{history.map((content) => {
					return <Bubble client={content.client}>{content.message}</Bubble>;
				})}
			</ChatHistory>
			<ChatInputWrapper>
				<ChatInputBox
					ref={inputRef}
					placeholder="text..."
					onChange={(e) => {
						setInputText(e.target.value);
					}}
					onKeyDown={_handleKeyDown}
				/>
				<ChatButton onClick={submitUserResponse}>
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
	max-height: 400px;
`;

const ChatHeader = styled.div`
	height: 40px;
	font-size: 26px;
	font-weight: 700;
	margin-bottom: 20px;
`;

const ChatHistory = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column-reverse;
	overflow: scroll;
	padding-bottom: 10px;
	background-color: #ededed;
	padding: 6px;
	border-radius: 20px 20px 0 0;
`;

const ChatInputWrapper = styled.div`
	display: flex;
	margin-top: auto;
	background-color: #ededed;
	padding: 6px;
	border-radius: 0 0 20px 20px;
`;

const ChatInputBox = styled.input`
	border-radius: 20px;
	border: 1px solid #38a1f2;
	margin: 1px;
	padding: 6px 12px;
	outline: none;
	width: 100%;
	:hover,
	:focus {
		border: 2px solid #38a1f2;
		margin: 0px;
	}
`;

const ChatButton = styled.button`
	display: flex;
	align-items: center;
	border-radius: 999px;
	border: none;
	background-color: #38a1f2;
	color: #fff;
	padding: 8px;
	margin-left: 8px;
	cursor: pointer;
	:hover {
		background-color: #2098f3;
	}
`;
