import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing own components
import Header from "./components/Header"
import Footer from "./components/Footer"

// importing pages for switch routing
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects"

//  importing Style control elements for creating and using a theme
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
    //   primary: {
    //       main: "#78909c"
    //   },
      secondary: {
          main: "#cfd8dc"
      }
    }
});


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
