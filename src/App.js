import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Nav from "./Nav";
import Item from "./pages/Item";
import Cart from "./pages/Cart";


function App() {
    return (
        <div className="App">
            <Router>
                <Nav></Nav>
                <Switch>
                    <Route path="" exact component={Home}></Route>
                    <Route path="/shop" exact component={Shop}></Route>
                    <Route path="/contact" exact component={Contact}></Route>
                    <Route path="/shop/:id" component={Item}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
