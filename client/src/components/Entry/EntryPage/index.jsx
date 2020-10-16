/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import Footer from '../../Footer';

export default () => {
  const user = useSelector(state => state.user.loggedInUser);
  // console.log('user from Entry Page:', user)
  const history = useHistory();
  if (JSON.stringify(user) !== '{}') {
    history.push('/home');
  }

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
