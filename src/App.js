import './App.css';
import Header from './Layout/Header';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Page/Login'
import Register from './Page/Register'
import AddProduct from './Page/AddProduct'
import UpdateProduct from './Page/UpdateProduct'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <h1>Dashboard</h1> */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/add">
          <AddProduct />
        </Route>
        <Route path="/update">
          <UpdateProduct />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
