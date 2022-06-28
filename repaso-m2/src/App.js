import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from './components/Home';
import Detail from './components/Detail';
import Searchbar from './components/Searchbar';


function App() {
  return (
    <div>
      <Searchbar />
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route exact path="/detail/:id" component={Detail} />
        </Switch>
    </div>
  );
}

export default App;
