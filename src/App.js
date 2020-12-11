import "./App.css";
import { Switch, Route } from "react-router-dom";

import Europe from "./pages/europe";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Europe} />
      </Switch>
    </div>
  );
}

export default App;
