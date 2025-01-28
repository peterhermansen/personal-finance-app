'use client';
import '@/styles/globals.css';
import styles from '@/styles/components/login/page.module.css';
import { useStateContext } from '@/app/stateContext';
import { useState, useEffect } from 'react';
import validator from 'email-validator';

export default function LoginPage() {
  const { windowSize } = useStateContext();
  const [display, setDisplay] = useState('login');
  const [displayPass, setDisplayPass] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const txt = display === 'login' ? 'Login' : 'Sign Up';

  const handlePassClick = () => {
    setDisplayPass(!displayPass);
  };

  const handleSwitchClick = () => {
    display === 'login' ? setDisplay('signup') : setDisplay('login');
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassValue(e.target.value);
  };

  useEffect(() => {
    setValidEmail(validator.validate(emailValue));
  }, [emailValue]);

  useEffect(() => {
    setValidEmail(validator.validate(emailValue));
  }, [passValue]);

  return (
    <div className={styles.container}>
      {windowSize.width > 1200 ? (
        <div className={styles.left}>
          <img
            src="images/illustration-authentication.svg"
            alt="Login Image"
            className={styles.image}
          />
          <img
            src="images/logo-large.svg"
            alt="Logo Image"
            className={styles.logo}
          />
          <div className={styles.text}>
            <span className="text-1 white bold">
              Keep track of your money and save for your future
            </span>
            <span className="text-4 white">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </span>
          </div>
        </div>
      ) : null}

      <div className={styles.right}>
        <div className={styles.login}>
          <span className="text-1 bold">{txt}</span>
          <div className={styles.fields}>
            {display === 'login' ? null : (
              <div className={styles.inputs}>
                <span className="text-5 dark-gray bold">Name</span>
                <input
                  className={styles.input}
                  value={nameValue}
                  onChange={handleNameChange}
                ></input>
              </div>
            )}

            <div className={styles.inputs}>
              <span className="text-5 dark-gray bold">Email</span>
              <input
                className={styles.input}
                value={emailValue}
                onChange={handleEmailChange}
              ></input>
              {display !== 'login' && !validEmail ? (
                <span className="text-5 red">Enter a valid email</span>
              ) : null}
            </div>

            <div className={styles.inputs}>
              <span className="text-5 dark-gray bold">
                {display === 'login' ? '' : 'Create '}Password
              </span>
              <input
                className={styles.input}
                type={displayPass ? 'text' : 'password'}
                value={passValue}
                onChange={handlePassChange}
              ></input>
              <button className={styles.button} onClick={handlePassClick}>
                <img
                  src="/images/icon-show-password.svg"
                  alt="Show Password"
                ></img>
              </button>
              {display === 'login' ? null : (
                <span className={`${styles['pass-info']} text-5 gray`}>
                  Passwords must be at least 8 characters
                </span>
              )}
            </div>
          </div>

          <button className={`${styles.submit} text-4 bold`}>{txt}</button>

          <div className={styles.switch}>
            <span className="text-4 dark-gray">
              {display === 'login' ? 'Need to create' : 'Already have'} an
              account?
            </span>
            <button
              className={`text-4 bold ${styles['switch-btn']}`}
              onClick={handleSwitchClick}
            >
              {display === 'login' ? 'Sign Up' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
