import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "./Components/Chart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "100vw",
              marginTop: "10%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <div style={{ width: "50%" }}>
              <Chart
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  background: "transparent"
                }}
              />
            </div>

            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  width: "50%",
                  backgroundColor: "purple",
                  height: "33vh"
                }}
              >
                {" "}
                Da profile card
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "blue", height: "100vh", margin: "40px" }}
        >
          All da cards
        </div>
      </div>
    );
  }
}

export default App;
