
import React from "react";
import ReactDOM from "react-dom/client";
//Pure React
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// Using JSX 
const jsxheading = <h1 id="heading"> Namaste React By JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading)