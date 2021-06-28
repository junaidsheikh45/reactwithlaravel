import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../App.css';

function Header() 
{
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto pl-5">
                    <Link to="/add" className="link_padding text-light"> Add Product </Link>
                    <Link to="/update" className="link_padding text-light"> Update Product  </Link>
                    <Link to="/login" className="link_padding text-light"> Login </Link>
                    <Link to="/register" className="link_padding text-light"> Register </Link>
                </Nav>
            </Navbar>
        </>
    );    
}
export default Header;