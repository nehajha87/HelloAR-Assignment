import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products.js';
import Customer from './Pages/Customer.js';
import Demos from './Pages/Demos';
import DemoScript from './Pages/DemoScript.js';
import Sales from './Pages/Sales.js';
import Settings from './Pages/Settings';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Sidebar>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/demo" element={<DemoScript />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/setting" element={<Settings />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
