import "./App.css";
import { Home } from "./components/Home/Home";
import { useFetch } from "./hooks/useFetch.ts";
import { DataContext } from "./context/DataContext.ts";

function App() {
  const { data } = useFetch();
  console.log(data);

  return (
    <>
      <DataContext.Provider value={data}>
        <Home />
      </DataContext.Provider>
    </>
  );
}

export default App;
