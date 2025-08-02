import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// /* eslint-disable react-refresh/only-export-components */
// import React from "react";
// import ReactDOM from "react-dom/client";

// import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App | chai</h1>
//     </div>
//   );
// }

// // const ReactElement = {
// //     type: 'a',
// //     props: {
// //         href: 'https://google.com',
// //         target: '_blank'
// //     },
// //     children: 'Click me to visit google'
// // }

// const anotherElement = (
//   <a href="https://youtube.com" target="_blank">
//     Visit youtube
//   </a>
// );

// const reactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click me to visit google",
//   anotherElement
// );

// ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
