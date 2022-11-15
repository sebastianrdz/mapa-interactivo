import { useState } from "react";
import { dispatchIntention } from "../api/intentionApi";

function ChatBot() {
  const [inputText, setInputText] = useState('');
  // const [response, setResponse] = useState({});

	return (
		<>
			<input onChange={(e) => {setInputText(e.target.value)}}/>
			<button onClick={dispatchIntention(inputText)}>Subbmit</button>
		</>
	);
}

export default ChatBot;
