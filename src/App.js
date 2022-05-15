import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import ItemDetail from './components/Home/ItemDetail';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import RequireAuth from './components/pages/RequireAuth';
import Inventory from './components/pages/Inventory';
import AddItem from './components/pages/AddItem';
import ManageItem from './components/pages/ManageItem';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/book/:bookId' element={<ItemDetail></ItemDetail>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/inventory' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path='/additem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='/manageitem' element={<RequireAuth>
          <ManageItem></ManageItem>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
