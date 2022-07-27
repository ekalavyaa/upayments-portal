import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Header } from './components/header/header';
import { AddProduct } from './pages/add/add';
import { Home } from './pages/home/home';
import { NotFoundPage } from './pages/not-found/not-found';
import { Product } from './pages/product/product';

function App() {
  return (
    <div className="App relative">
      <Header />
      <div className='container absolute'>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} >
            </Route>
            <Route path="/products/:id" element={< Product />} >
            </Route>
            <Route path="/add-product" element={< AddProduct />} >
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HashRouter>
      </div>
    </div >
  );
}

export default App;
