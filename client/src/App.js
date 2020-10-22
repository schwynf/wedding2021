import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Travel from"./pages/Travel"
import WeddingParty from "./pages/WeddingParty"
import Home from "./pages/Home"
import OurStory from "./pages/OurStory"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/OurStory" component={OurStory} />
          <Route exact path="/WeddingParty" component={WeddingParty} />
          <Route exact path="/Travel" component={Travel} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
