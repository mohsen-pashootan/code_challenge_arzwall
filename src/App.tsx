import Header from "./components/Header";
import "./assets/sass/app.scss";
import ListBoxes from "./components/ListBoxes/index";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <div className="main">
      <Header />
      <ListBoxes />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
