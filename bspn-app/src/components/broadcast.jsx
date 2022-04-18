import React from "react";
import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Line } from "../components/line";

export function Broadcast(stream) {
  var temp = JSON.stringify(stream).split("watch?v=")[1];
  var temp0 = temp.split('"}')[0];
  var newStream = "https://www.youtube.com/embed/" + temp0;

  // console.log("theid" + id);
  return (
    <div
      class="grid-item"
      style={{
        backgroundColor: "white",
        borderRadius: "25px",
        border: "5px solid",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          textAlign: "Center",
          fontSize: 25,
          left: "20px",
          bottom: "-5px",
          fontWeight: "bold",
        }}
      >
        Live Stream
      </h2>

      <iframe width="100%" height="620" src={newStream}></iframe>
    </div>
  );
}
