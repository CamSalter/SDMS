import React, { useState } from 'react';
import { Container, Form, Input, Button } from 'reactstrap';
import '../styles/SignUp.scss';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username: ', username);
    console.log('Email: ', email);
    console.log('Password: ', password);
  };

  return (
    <Container className='signup-container' style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit}>
        <h2 className='signup-title'>Sign Up</h2>
        <Input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='mb-4'
        />
        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='mb-4'
        />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mb-4'
        />
        <Button color='primary' block>
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
