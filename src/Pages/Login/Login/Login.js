import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    //get input value when submited form
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }
    const navigateRegister = event => {
        navigate('/register');
    }

    return (
        <div className='container w-50  mx-auto shadow-lg bg-primary  py-2  rounded my-5'>
            <h2 className='text-light text-center mt-2'>  Please Login...</h2>

            <Form onSubmit={handleSubmit} className='text-light text-start   justify-content-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='bg-danger' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-light'>New to genuin car? <span onClick={navigateRegister} className='text-warning  fs-5 fw-semibold'>Please Register</span> </p>
        </div>
    );
};

export default Login;