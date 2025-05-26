'use client';
import '@/styles/globals.css';
import styles from '@/styles/components/login/page.module.css';
import { useStateContext } from '@/app/stateContext';
import { useState, useEffect, useLayoutEffect } from 'react';
import validator from 'email-validator';
import generateHash from '@/utils/generateHash';
import fetchReq from '@/utils/fetchReq';
import { useRouter } from 'next/navigation';
import Loading from '../Loading';

export default function LoginPage({ validCookie }) {
  const { windowSize, setForceReload } = useStateContext();
  const [display, setDisplay] = useState('login');
  const [displayPass, setDisplayPass] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [wrongLogin, setWrongLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const txt = display === 'login' ? 'Login' : 'Sign Up';
  const router = useRouter();

  useLayoutEffect(() => {
    validCookie ? router.push('/') : null;
    validCookie ? null : setLoading(false);
  }, [validCookie, router]);

  const handlePassClick = () => {
    setDisplayPass(!displayPass);
  };

  const handleSwitchClick = () => {
    display === 'login' ? setDisplay('signup') : setDisplay('login');
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
    setEmailExists(false);
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
    passValue.length > 7 ? setValidPass(true) : setValidPass(false);
  }, [passValue]);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validEmail && validPass && nameValue.length > 0) {
      const hash = await generateHash(passValue);
      const res = await fetchReq('POST', 'login', {
        name: nameValue,
        email: emailValue,
        hash: hash,
      });
      console.log(res);
      if (res === 'User created successfully') {
        setTimeout(() => {
          setForceReload(true);
          router.push('/');
        }, 10);
      }

      if (res.error === 'Email exists') setEmailExists(true);
    }
  };

  const handleLogin = async (e) => {
    setWrongLogin(false);
    e.preventDefault();
    if (validEmail) {
      const res = await fetchReq('POST', 'login', {
        email: emailValue,
        pass: passValue,
      });
      if (res === 'Logged in successfully') {
        setTimeout(() => {
          setForceReload(true);
          router.push('/');
        }, 10);
      }
      if (res.error === 'Incorrect Password') setWrongLogin(true);
    }
  };

  if (loading) return <Loading validCookie={validCookie} />;

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
                type="email"
              ></input>
              {display !== 'login' && !validEmail && emailValue.length > 0 ? (
                <span className="text-5 red">Enter a valid email</span>
              ) : null}
              {emailExists ? (
                <span className="text-5 red">
                  Account with that email already exists.
                </span>
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleLogin(e);
                }}
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
              {wrongLogin ? (
                <span className="text-5 red">Wrong email or password</span>
              ) : null}
            </div>
          </div>

          <button
            className={`${styles.submit} text-4 bold`}
            onClick={display === 'login' ? handleLogin : handleSignup}
            type="button"
          >
            {txt}
          </button>

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
