import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  FormContainer,
  FormLabel,
  FormInput,
  Button,
} from "../../components/Form";
import { USER_LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(USER_LOGIN);

  useEffect(() => (error ? console.log(error) : console.log("ok")), [error]);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const { data } = await login({ variables: { ...formData } });
      console.log(data);
      Auth.login(data.login.token);
    } catch (err) {
      console.log(err);
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <FormContainer onSubmit={formSubmit}>
        <div>
          <FormLabel>
            Email{" "}
            <FormInput
              type="email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
            />
          </FormLabel>
        </div>
        <div>
          <FormLabel>
            Password{" "}
            <FormInput
              type="password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </FormLabel>
        </div>
        <Button type="submit">Login</Button>
      </FormContainer>
      <div>
        <p>
          Not a member?{" "}
          <Link className="link" to="/register">
            Sign up
          </Link>{" "}
          here.
        </p>
      </div>
    </div>
  );
};
