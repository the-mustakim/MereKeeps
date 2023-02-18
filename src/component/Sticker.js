import React from "react";

export default function Sticker(props) {
  return (
    <>
      <div className="card" style={{width:500}}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
          {props.description}
          </p>
        </div>
      </div>
    </>
  );
}
