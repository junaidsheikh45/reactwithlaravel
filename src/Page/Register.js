import {React, useState, useEffect} from 'react';
import {Form,Button} from 'react-bootstrap';
import $ from 'jquery'; 

const Register = () =>
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [myClass, SetMyClass] = useState('');
    const [error, setError] = useState(false);

    async function SignUp()
    {
        
        let data = {name,email,password}
        
        if(name==='' || email==='' || password==='')
        {
            setMessage("Mandatory Fields Are Required");
            SetMyClass("bg-warning text-light p-1")
            Hide();
            setError(true);
            return false;
        }

        let response = await fetch('http://127.0.0.1:8000/api/signu', 
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept'  : 'application/json'
            },
            body:   JSON.stringify(data)
        });
        response = await response.json()
        
        if(response==='success') {
            setMessage('Data Inserted Successfully')  
            ReSet();
            Hide();
            setError(true);
            SetMyClass("bg-success text-light p-1")
            return;
        }
        else {
            Hide();
            setError(true);
            setMessage('Something Went Wrong');
            SetMyClass("bg-danger text-light p-1")
            return;
        }
    }

    function ReSet() 
    {
        setName('')
        setEmail('')
        setPassword('')
    }

    function Hide() {
        $(document).ready(function () {
            setTimeout(function () {
                $('#disappear').hide();
            }, 3000);
          });
    }

   
    
    return (
            <div className="container mt-5">
            <h1>Register Page</h1>
                <div className="row my-5">
                    <p className={myClass} id="disappear" >{message}</p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter User Name" />
                        </Form.Group>
                        <br/>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <br/>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                        </Form.Group>
                        <br/>
                        <Button variant="primary" onClick={(e)=>SignUp()}> Submit  </Button>
                    </Form>
                </div>
            </div>
    );    
}
export default Register;