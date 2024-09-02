import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signupStart } from "../../redux/user/user.actions";
import { selectSignUpError } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import "./sign-up.styles.scss";

const SignUp = ({ signupStart, formError }) => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userData;

    if (password !== confirmPassword) {
      alert("The Password does not match the Password Confirmation.");
      return;
    }
    try {
      signupStart(displayName, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit} autoComplete="off">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Password Confirmation"
          required
        />
        {formError && <div className="form-error">{formError}</div>}

        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  formError: selectSignUpError,
});

const mapDispatchToProps = (dispatch) => ({
  signupStart: (displayName, email, password) =>
    dispatch(signupStart({ displayName, email, password })),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
