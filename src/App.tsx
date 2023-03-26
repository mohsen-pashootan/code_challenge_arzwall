import Header from "./components/Header";
import "./assets/sass/app.scss";
import ListBoxes from "./components/ListBoxes/index";

function App() {
  return (
    <div className="main">
      <Header />
      <ListBoxes />
    </div>
  );
}

export default App;
