import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    //get input value when submited form
    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password)
    }
    const navigateLogin = event => {
        navigate('/login');
    }
    return (
        <div className='container w-50  mx-auto shadow-lg bg-primary  py-2  rounded my-5'>
            <h2 className='text-light text-center mt-2' >Please Register</h2>
            <Form onSubmit={handleSubmit} className='text-light text-start   justify-content-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='bg-light text-primary fw-semibold' variant="primary" type="submit">
                    Create
                </Button>
            </Form>
            <p className='text-light'>Already Have an Account? <Link to='/login' onClick={navigateLogin} className='text-warning text-decoration-none  fs-5 fw-semibold'>Login</Link> </p>
        </div>
    );
};

export default Register;