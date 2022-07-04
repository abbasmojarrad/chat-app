import { Switch,Route,Redirect } from "react-router-dom";
import Login from "./component/Login";

function App() {
  return (
    <Switch>
      <Route path="/login" exact component={Login}/>
      <Redirect to="/login" component={Login}/>
    </Switch>

  );
}

export default App;
