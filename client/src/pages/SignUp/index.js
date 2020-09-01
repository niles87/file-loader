import React, { useState, useEffect } from "react";
import {
  FormContainer,
  FormInput,
  FormLabel,
  Button,
} from "../../components/Form";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => (error ? console.log(error) : console.log("ok")), [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({ variables: { ...formData } });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div>
      <FormContainer onSubmit={handleFormSubmit}>
        <div>
          <FormLabel>
            Username{" "}
            <FormInput
              type="text"
              name="username"
              onChange={handleInputChange}
              value={formData.username}
              required
            />
          </FormLabel>
        </div>
        <div>
          <FormLabel>
            Email{" "}
            <FormInput
              type="email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              required
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
              required
            />
          </FormLabel>
        </div>
        <Button type="submit">SignUp</Button>
      </FormContainer>
    </div>
  );
};
