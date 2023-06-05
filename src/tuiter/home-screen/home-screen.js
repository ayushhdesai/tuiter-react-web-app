import React from "react";
import WhatsHappening from "../whats-happening";
import TuitsList from "../tuits/TuitsList";

function HomeScreen() {
    return(
        <>
          <h4>Home</h4>
          <WhatsHappening/>
          <TuitsList />
        </>
      );
     };
     
export default HomeScreen;