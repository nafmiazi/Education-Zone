import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Others from './components/Others/Others';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>
        
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/others">
            <Others></Others>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
