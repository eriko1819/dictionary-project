import React from "react";

export default function Phonetic(props) {
  if (props.phonetics.audio) {
  return (
    <div className="Phonetic">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      {props.phonetics.text}
    </div>
  );  
  } else return null;
}