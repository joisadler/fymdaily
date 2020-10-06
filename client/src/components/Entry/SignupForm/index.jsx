import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import useAuth from '../../../hooks/useAuth';
import { signup } from '../../../actions/UserActions';
import MessageActions from '../../../actions/MessageActions';

const SignupForm = ({ setCurrentForm }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
  const message = useSelector(state => state.message.message);
  const dispatch = useDispatch();
  const setMessage = msg => dispatch(MessageActions.setMessage(msg));

  const doSignup = useAuth(signup);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      return setMessage('All fields are required!');
    }
    if (password !== confirmPassword) {
      return setMessage('Your password and confirmation password do not match!');
    }
    const userCreds = {
      username,
      email,
      password,
      confirmPassword,
    };
    doSignup(userCreds, isRememberMeChecked);
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleRememberMeChange = () => {
    setIsRememberMeChecked(!isRememberMeChecked);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <p className="signup-message" style={{ color: 'red' }}>{message}</p>
      <fieldset className="credentials">
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          onFocus={() => setMessage('')}
          aria-label="Username"
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={() => setMessage('')}
          aria-label="Email"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onFocus={() => setMessage('')}
          aria-label="Password"
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          onFocus={() => setMessage('')}
          aria-label="Confirm Password"
          placeholder="Confirm Password"
        />
      </fieldset>
      <section className="form-options-section">
        <section className="form-submit-section">
          <section className="remember-me-section">
            <input
              type="checkbox"
              id="remember-me"
              defaultChecked={isRememberMeChecked}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="remember-me">
              Remember Me
            </label>
          </section>
          <br />
          <button type="submit" className="signup-button">Sign Up</button>
        </section>
        <section className="other-option-section">
          Already have an account?
          <br />
          <button
            className="login-option"
            type="button"
            onClick={() => { setCurrentForm('login'); setMessage(''); }}
          >
            Log In
          </button>
        </section>
      </section>
    </form>
  );
};

SignupForm.propTypes = {
  setCurrentForm: PropTypes.func.isRequired,
};

export default SignupForm;
