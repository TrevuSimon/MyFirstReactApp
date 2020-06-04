import React from "react";
import ReactDOM from "react-dom";
const useState = React.useState;
const useEffect = React.useEffect;

function ExampleComponent() {
  return (
    <div>
      <h1>Our App!</h1>
      <p>Como assim?!</p>
    </div>
  );
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
