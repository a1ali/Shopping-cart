import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Nav from "./Nav";
import Item from "./pages/Item";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav></Nav>
                <Switch>
                    <Route path="/Shopping-cart" exact component={Home}></Route>
                    <Route path="/Shopping-cart/shop" exact component={Shop}></Route>
                    <Route path="/Shopping-cart/contact" exact component={Contact}></Route>
                    <Route path="/Shopping-cart/shop/:id" component={Item}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
