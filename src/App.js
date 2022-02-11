import './App.css';

import Navbar from './component/Navbar';
import New from './component/pages/New';
import ProductBestSellers from './component/pages/product/ProductBestSellers';
import Services from './component/pages/Services';
import Slider from './component/pages/Slider';
import Banner from './component/pages/Banner';
import TestomonialData from './component/pages/TestomonialData';
import Company from './component/Company';
import Footer from './component/Footer';
import {  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import ProductListining from './component/pages/product/ProductListining';
import ProductDetails from './component/pages/product/ProductDetails';
function App() {

  return (
    <Router>
      {/*====== NAVBAR =======*/}
      <Navbar/>
      {/*====== HOME =======*/}
      <Slider/>
      {/*====== SERVICES =======*/}
      <Services/>
      {/*====== NEW =======*/}
      <New/>
      {/*====== PRODUCTS-BEST-SELLERS =======*/}
      <ProductBestSellers/>
      {/*====== BANNER =======*/}
      <Banner/>
      {/*====== PRODUCTS-BEST-SELLERS =======*/}
      <ProductBestSellers/>
      {/*====== TESTOMONIAL =======*/}
      <TestomonialData/>
      {/*====== COMPANY =======*/}
      <Company/>
      {/*====== FOOTER =======*/}
      <Footer />

  <Routes>
    <Route exact path='/'/>
    <Route exact path='/product' element={<ProductListining/>}/>
    <Route exact path='/ProductBestSellers' element={<ProductBestSellers/>} />
    <Route exact path="/product/:productId" element={<ProductDetails/>} />
    <Route>404 Not Found!</Route>
  </Routes> 
  
</Router>
  );
}

export default App;
