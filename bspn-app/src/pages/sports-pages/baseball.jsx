import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { NavBar } from "../../components/navBar";
import { SportsPage } from "../misc/sportsPageLayout";

export function Baseball() {
  return (
    <div>
      <div>
        <h2>Baseball</h2>
      </div>

      <body>
        <SportsPage sportname={"baseball"}/>
      </body>
    </div>
  );
}
