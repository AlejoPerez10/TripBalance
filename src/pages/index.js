import Head from 'next/head';
import Form from '@/components/form';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const inputsIndex = [
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
    required: true
  }
];

export default function IndexPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLoginSubmit = (loginData) => {
    const { email, password } = loginData;
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.Password === password) {
      // Guarda al usuario en sesión actual en localStorage
      localStorage.setItem('currentUser', JSON.stringify(storedUser));
      router.push('/tripList'); // Redirige a la página de lista de viajes
    } else {
      setError('Invalid email or password');
      setTimeout(() => setError(''), 3000); // Borra el mensaje de error después de 3 segundos
    }
  };

  return (
    <>
      <div className='d-flex flex-column'>
        
        <div className='flex-fill'>

          <Form
            title='Login'
            inputs={inputsIndex}
            btn='ENTER'
            footer={{
              text: "I don't have an account",
              linkText: 'SIGN UP',
              linkHref: 'signUp'
            }}
            onSubmit={handleLoginSubmit}
          />
        </div>

        <div className='w-100 d-flex justify-content-center'>
          {error && <p className="position-absolute w-50 text-center alert alert-danger">{error}</p>}
        </div>

      </div>
    </>
  );
}