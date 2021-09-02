import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Nav from "./Nav";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav></Nav>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/contact" exact component={Contact}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
