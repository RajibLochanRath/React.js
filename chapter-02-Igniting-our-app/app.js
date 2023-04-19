import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { className: "h1", key: "#1" },
  "welcome everyone"
);
const para = React.createElement(
  "p",
  { className: "para", key: "#2" },
  "this is react app"
);

const container = React.createElement("div", { className: "container" }, [
  heading,
  para,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
