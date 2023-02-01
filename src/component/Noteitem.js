import React from "react";

export default function NoteiTem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">
          {note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus laudantium assumenda dolor ipsa quos, magni deleniti, perspiciatis hic rerum quidem? Sit natus assumenda tempora fuga sapiente culpa commodi voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
}
