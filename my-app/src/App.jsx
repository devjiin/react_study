import { BrowserRouter } from "react-router-dom";
import { Router } from "./shared/Router";
import Nav from "./components/Nav";
import { Reset } from 'styled-reset'

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Nav />
      <Router />
    </BrowserRouter>
  );
}

export default App;
