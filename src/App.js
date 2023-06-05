import React, { useState, useEffect } from "react";
import Messages from "./Messages";
import "./App.css";
import Input from "./Input";

const randomName = () => {
  const adjectives = ["Madison", "Luna", "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoey", "Nora", "Lily", "Eleanor", "Hannah", "Lillian", "Addison", "Aubrey", "Ellie", "Stella", "Natalie", "Zoe", "Leah", "Hazel", "Violet", "Aurora"];
  const nouns = ["Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Hall"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + "_" + noun;
};

const randomColor = () => {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
};

function App() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });

  useEffect(() => {
    const drone = new window.Scaledrone("XHZrsSMiMyWJYHJB", {
      data: member
    });

    drone.on('open', error => {
      if (error) {
        console.error(error);
      } else {
        const updatedMember = { ...member, id: drone.clientId };
        setMember(updatedMember);
      }
    });

    const room = drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const message = { member, text: data };
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      drone.close();
    };
  }, [member]);

  const sendMessage = (message) => {
    window.drone.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Chat app</h1>
      </div>
      <Messages messages={messages} currentMember={member} />
      <Input sendMessage={sendMessage} />
    </div>
  );
}

export default App;

