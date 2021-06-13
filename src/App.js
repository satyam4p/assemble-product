import { useState }  from 'react';
import './App.css';
import DescriptionComp from './components/description';
import ProductParts from './components/productParts';
import DragAndDrop from './components/dragAndDropComponent';
import FinalProduct from './components/finalProduct';
import {BrowserRouter as Router,  Route } from 'react-router-dom';
import { productContext } from './productContext/context';
function App() {
  const [data,setData] = useState([]);
  const [products,setProducts] = useState([]);
  const [dropProducts, setDropProducts] = useState([]);
  return (
    <Router>
      <Route path="/" exact component={DescriptionComp}/>
      <productContext.Provider value={{data, setData, products, setProducts, dropProducts, setDropProducts}}>
      <Route path="/product-parts" exact component={ProductParts}/>
      <Route path="/drag-drop" exact component={DragAndDrop}/>
      <Route path="/final-product" exact component={FinalProduct}/>
      </productContext.Provider>
    </Router>
  );
}

export default App;
