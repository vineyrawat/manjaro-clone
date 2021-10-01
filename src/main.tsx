import ReactDOM from "react-dom";
import "./index.css";
import Manjaro from "./components/manjaro";

const Main = () => {
  return (
    <div className="dark">
      <Manjaro />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
