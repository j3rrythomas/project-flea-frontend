import "./App.scss";
import { CustomCursor, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <CustomCursor />
      <div className="body">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
