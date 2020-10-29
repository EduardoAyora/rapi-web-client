import Navbar from './Navbar'
import {BrowserRouter as Router} from "react-router-dom";
import Main from './Main'

function App() {
  return (
    <Router basename={'/rapi-web'}>
      <Navbar />
      <Main />
    </Router>
  );
}

export default App;
