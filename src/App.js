import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/style.scss";
import Login from "./Pages/Login";
import RouteList from "./Route";
import { Provider } from "react-redux";
import store from "./Redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={RouteList} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
