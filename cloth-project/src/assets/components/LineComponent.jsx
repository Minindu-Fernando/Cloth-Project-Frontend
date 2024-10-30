import React from "react";
import './linecomponent.css';

export default function LineComponent({ text }) {
  return (
    <div>
      <div className="line-container">
        <div className="line"></div>
        <h1 className="topic-text">{text}</h1>
        <div className="line"></div>
      </div>
    </div>
  );
}
