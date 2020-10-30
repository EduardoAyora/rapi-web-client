import {BrowserRouter as Router} from "react-router-dom";
import Main from './Main'
import {CategoriesProvider} from '../context/CategoriesContext'

function App() {
  return (
    <Router basename={'/rapi-web'}>
      <CategoriesProvider>
        <Main />
      </CategoriesProvider>
    </Router>
  );
}

export default App;
