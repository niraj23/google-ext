import React, { useState, useEffect } from "react";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../src/components/Pre' was resolved to '/U... Remove this comment to see the full error message
import Preloader from "../src/components/Pre";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Navbar' was resolved to '/Use... Remove this comment to see the full error message
import Navbar from "./components/Navbar";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Home/Home' was resolved to '/... Remove this comment to see the full error message
import Home from "./components/Home/Home";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/About/About' was resolved to ... Remove this comment to see the full error message
import About from "./components/About/About";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Projects/Projects' was resolv... Remove this comment to see the full error message
import Projects from "./components/Projects/Projects";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Footer' was resolved to '/Use... Remove this comment to see the full error message
import Footer from "./components/Footer";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Resume/Resume' was resolved t... Remove this comment to see the full error message
import Resume from "./components/Resume/Resume";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Router>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Preloader load={load} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Navbar />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ScrollToTop />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Switch>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/" exact component={Home} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/project" component={Projects} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/about" component={About} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/resume" component={Resume} />
        </Switch>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Footer />
      </div>
    </Router>
  );
}

export default App;
