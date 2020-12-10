import useAppHook from "./useAppHook";

function App() {

  const { list } = useAppHook();

  console.log('list', list);

  return (
    <div className="App">
      {
        list.map((personName, key) => (
            <div key={key}>
              {personName}
            </div>
        ))
      }
    </div>
  );
}

export default App;
