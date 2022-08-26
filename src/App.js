import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Form1 from "./components/form";
import Form2 from "./components/form2";
import Resultado from "./components/resultado";


class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Form1} />
        <Route exact path="/2" component={Form2} />
        <Route exact path="/resultado" component={Resultado} />
      </BrowserRouter>
    )
  }
}

export default App