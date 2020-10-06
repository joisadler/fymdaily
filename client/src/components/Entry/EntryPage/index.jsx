/* eslint-disable max-len */
import React, { useState } from 'react';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import Footer from '../../Footer';

export default () => {
  const [currentForm, setCurrentForm] = useState('login');

  return (
    <>
      <main className="page">
        <h1 className="app-description">
          <em>FYMdaily</em>
          &nbsp;– simple and minimalistic calorie/macronutrient tracker. Sign up today and start Fit Your Macros daily!
        </h1>
        <div className="form-container">
          {
            currentForm === 'login'
              ? <LoginForm setCurrentForm={setCurrentForm} />
              : <SignupForm setCurrentForm={setCurrentForm} />
          }
        </div>
      </main>
      <Footer />
    </>
  );
};
