import React, { useState, useNvigate } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { lock, loginImage, logo, mail } from "../../images/images";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainerAndFooter}>
        <div className={styles.loginContainer}>
          <div className={styles.formContainer}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="#" className={styles.logo} />
              <h4 className={styles.logoText}>SolidHash CO</h4>
            </div>
            <h2 className={styles.heading}> Welcome Back to SolidHash </h2>

            <form action="" onSubmit={submitHandler} className={styles.form}>
              <button className={styles.loginWithButton}>
                <FcGoogle className={styles.icon} />
                Login with Google
              </button>{" "}
              <button className={styles.loginWithButton}>
                <FaFacebookF className={styles.icon} />
                Login with Facebook
              </button>
              <p className={styles.orSignUpWith}>Or Sign Up with</p>
              <div className={styles.inputWrapper}>
                <label htmlFor="email" className={styles.label}>
                  E-mail:
                </label>
                <div className={styles.inputContainer}>
                  <div className={styles.iconContainer}>
                    <img src={mail} alt="#" className={styles.icon} />
                  </div>{" "}
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your E-mail"
                    value={email}
                    onChange={(e) => setEamil(e.target.value)}
                    className={styles.input}
                  />
                </div>
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="email" className={styles.label}>
                  Password:
                </label>
                <div
                  className={[
                    styles.inputContainer,
                    styles.passwordContainer,
                  ].join(" ")}
                >
                  <div className={styles.iconAndInput}>
                    <div className={styles.iconContainer}>
                      <img src={lock} alt="#" className={styles.icon} />
                    </div>{" "}
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                  {showPassword ? (
                    <AiOutlineEye
                      className={styles.showPasswordIcon}
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className={styles.showPasswordIcon}
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  )}
                </div>
              </div>
              <button className={styles.loginButton}>Login</button>
            </form>
            <p className={styles.doNotHaveAccount}>
              Don’t have an account?{" "}
              <Link to="/" className={styles.signUp}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>{" "}
        <div className={styles.footercontainer}>
          {" "}
          <Footer loginFooter />
        </div>
      </div>
      <img src={loginImage} alt="#" className={styles.image} />
    </div>
  );
};

export default Login;
