import {BrowserRouter as Router} from "react-router-dom";
import Main from './Main'
import {CategoriesProvider} from '../context/CategoriesContext'
import {CartProvider} from '../context/CartContext'

function App() {
  return (
    <Router basename={'/rapiweb'}>
      <CategoriesProvider>
        <CartProvider>
          <Main />
        </CartProvider>
      </CategoriesProvider>
    </Router>
  );
}

export default App;
