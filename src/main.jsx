import ReactDOM from "react-dom/client";
import { App } from "./App";
import './sass/index.scss';
const root= ReactDOM.createRoot(document.querySelector('#root'));

root.render(<h1>Hola CodingTuber</h1>);

root.render(<App />);