import "./App.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming conventions
    <div className="App">
      <Header />
      {/*header*/}
      <div className="app__body">
        <Sidebar />
      </div>
      {/*sidebar*/}
      {/*react-router -> Chat screen */}
    </div>
  );
}

export default App;
