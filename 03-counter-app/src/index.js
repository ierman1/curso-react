import ReactDOM from 'react-dom/client';
import CounterApp from './components/CounterApp';
import FirstApp from './components/FirstApp';
import './css/index.css';

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

root.render(<FirstApp name="Germán"/>);
// root.render(<CounterApp value={ 1 }/>);

