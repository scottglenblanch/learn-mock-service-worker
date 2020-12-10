import logo from '../../logo.svg';
import './App.css';
import useAppHook from "./useAppHook";

function App() {

  const { list } = useAppHook();

  return (
    <div className="App">
      {
        list.map((personName) => (
            <div>
              {personName}
            </div>
        ))
      }
    </div>
  );
}

export default App;
