import React from "react";
import { Switch, Route } from "react-router-dom";
import DataComp from "./Components/DataComp";
import { movieList } from "./Components/Data";
import Another from "./Components/Another";

function App() {
  return (
    <div className="App">
      <>
        <Switch>
          <Route exact path="/" component={DataComp} />
          <Route
            exact
            path="/another/:id"
            component={Another}
          />
        </Switch>
      </>
    </div>
  );
}

export default App;
