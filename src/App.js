import React, { useState } from "react";
import Messages from "./Messages";
import "./App.css";

const randomName = () => {
  const adjectives = ["Madison", "Luna", "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoey", "Nora", "Lily", "Eleanor", "Hannah", "Lillian", "Addison", "Aubrey", "Ellie", "Stella", "Natalie", "Zoe", "Leah", "Hazel", "Violet", "Aurora"];
  const nouns = ["Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Hall"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + "_" + noun;
}

const randomColor = () => {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

const App = () => {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });


  return (
    <div className="App">
      <div className="App-header">
        <h1>Chat app</h1>
      </div>
      <Messages messages={messages} currentMember={member} />
    </div>
  );
}

export default App;