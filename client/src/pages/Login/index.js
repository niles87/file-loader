import React, { useRef } from "react";
import {
  FormContainer,
  FormLabel,
  FormInput,
  Button,
} from "../../components/Form";

export const Login = () => {
  return (
    <div>
      <FormContainer>
        <div>
          <FormLabel>
            Email: <FormInput />
          </FormLabel>
        </div>
        <div>
          <FormLabel>
            Password: <FormInput />
          </FormLabel>
        </div>
        <Button type="submit">Login</Button>
      </FormContainer>
    </div>
  );
};
