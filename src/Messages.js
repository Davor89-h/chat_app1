import React from "react";



function Messages({ messages, currentMember }) {
  const randomId = () => {
    const min = 1;
    const max = 100000;
    const random = min + (Math.random() * (max - min));
    return random;
  };

  const renderMessage = (message) => {
    const { member, text } = message;
    const index = randomId();
    const messageFromMe = member.id === currentMember.id;

    const className = messageFromMe
      ? "Messages-message currentMember" : "Messages-message";

    return (
      <li key={index} className={className}>
        <div className="avatar" style={{ backgroundColor: member.clientData.color }}></div>
        <div className="Message-content">
          <div className="text">{text}</div>
          <div className="username">{member.clientData.username}</div>
        </div>
      </li>
    );
  };

  return (
    <ul className="Messages-list">
      {messages.map((m) => renderMessage(m))}
    </ul>
  );
};

export default Messages;