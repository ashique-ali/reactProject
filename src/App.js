import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeDetails from './Components/EmployeeDetails';
import Header from './Components/Header';
import Product from './Components/Searchbar/Product';
import Form from './Components/Form/Form';
import TodoList from './Components/Todo/TodoList';
import Fileupload from './Components/Imagefile/Fileupload';
import Liftingstate from './Components/LiftingState/Liftingstate';
import Colorpicker from './Components/Colorpicker/Colorpicker';
import ProductList from './Components/productList';
import CartPage from './Cartpage';
import MultiSelect from './Components/Option';
import Test from './Components/Test';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EmployeeDetails />}></Route>
          <Route path="/productlist" element={<Product />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path='/todo' element={<TodoList />}></Route>
          <Route path='/file' element={<Fileupload />}></Route>
          <Route path='/liftingState' element={<Liftingstate />}></Route>
          <Route path='/color' element={<Colorpicker />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='/pdpList' element={<ProductList />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/multiSelect' element={<MultiSelect />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
