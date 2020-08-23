import React, { useRef } from "react";
import {
  FormContainer,
  FormInput,
  FormLabel,
  Button,
} from "../../components/Form";

export const SignUp = () => {
  return (
    <div>
      <FormContainer>
        <div>
          <FormLabel>
            Username: <FormInput />
          </FormLabel>
        </div>
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
        <Button type="submit">SignUp</Button>
      </FormContainer>
    </div>
  );
};
