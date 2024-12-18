import Head from 'next/head';
import Form from '@/components/form';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const inputsSignUp = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    required: true,
  },
  {
    name: 'last name',
    type: 'text',
    placeholder: 'Last Name',
    required: false,
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    required: true,
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    required: true,
  },
  {
    name: 'confirm password',
    type: 'password',
    placeholder: 'Confirm Password',
    required: true,
  }
];

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (error || message) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [error, message]);

  const handleSignUpSubmit = (signUpData) => {
    const { email, password, 'confirm password': confirmPassword, name, 'last name': lastName } = signUpData;

    if (password.length <= 6) {
      setError('Password must be more than 6 characters');
      setTimeout(() => setError(''), 3000);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setTimeout(() => setError(''), 3000);
      return;
    }

    if (localStorage.getItem(email)) {
      setError('User already exists');
      setTimeout(() => setError(''), 3000);
      return;
    }

    // Crear y guardar nuevo usuario
    const newUser = { Email: email, Password: password, Name: name, LastName: lastName, Trips: [] };
    localStorage.setItem(email, JSON.stringify(newUser));
    setMessage('Account created successfully');

    setTimeout(() => {
      setMessage('');
      router.push('/'); // Redirige al login después del registro
    }, 1000);
  };

  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        <div className='flex-fill'>

          <Form
            title='Sign Up'
            inputs={inputsSignUp}
            btn='SUBMIT'
            footer={{ text: "¡ Create an account !" }}
            onSubmit={handleSignUpSubmit}
          />

          <div className='w-100 d-flex justify-content-center'>
            {error && <p className="position-absolute w-50 text-center alert alert-danger">{error}</p>}
          </div>
          
          <div className='w-100 d-flex justify-content-center'>
            {message && <p className="position-absolute w-50 text-center alert alert-success">{message}</p>}
          </div>

        </div>

      </div>
    </>
  );
}